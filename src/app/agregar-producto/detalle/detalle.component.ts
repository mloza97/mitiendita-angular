import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ModalService } from './modal.service';
import swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() producto: Producto;
    titulo: string = "Detalle del producto";
    archivoSeleccionado: File;
    progreso: number = 0;

  constructor(private productoService: ProductoService,
  public modalService: ModalService) { }

  ngOnInit(): void {
  }

  seleccionarArchivo(event){
    this.archivoSeleccionado = event.target.files[0];
    this.progreso = 0;
    console.log(this.archivoSeleccionado);
    if(this.archivoSeleccionado.type.indexOf('image') < 0){
      swal.fire("Error selecionar archivo", 'Debe ser de tipo imagen', 'error');
      this.archivoSeleccionado = null;
    }
  }

  subirArchivo(){
    if(!this.archivoSeleccionado){
        swal.fire("Error Upload", 'Debe seleccionar una foto', 'error');
    } else {
      this.productoService.subirArchivo(this.archivoSeleccionado, this.producto.id)
      .subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded / event.total) * 100);
        } else if(event.type === HttpEventType.Response){
          let response: any = event.body;
          this.producto = response.producto as Producto;
          this.modalService.notificarUpload.emit(this.producto);
          swal.fire("Archivo subido", response.mensaje, 'success');
        }
      });
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.archivoSeleccionado = null;
    this.progreso = 0;
  }
}
