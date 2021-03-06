import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public titulo: string = "Agregar Productos"
  public producto: Producto = new Producto()

  constructor(private productoService: ProductoService, private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.getProducto(id).subscribe((producto) => this.producto = producto)
      }
    })
  }

  create(): void{
    this.productoService.create(this.producto)
    .subscribe(producto => {
        this.router.navigate(['/agregarProd'])
        swal.fire('Nuevo producto', `Producto ${producto.nombre} creado con éxito!`, 'success')
      }
    )
  }

  update(): void{
      this.productoService.update(this.producto).subscribe( producto => {
        this.router.navigate(['/agregarProd'])
        swal.fire('Producto Actualizado', `Producto ${producto.nombre} actualizado con éxito!`, 'success')
      })
    }

}
