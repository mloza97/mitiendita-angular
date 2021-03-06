import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html'
})
export class AgregarProductoComponent implements OnInit {

  productos: Producto[];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    //Subscripcion al Observable
    this.productoService.getProductos().subscribe(
      (productos) => this.productos = productos
    );
  }

  delete(producto: Producto): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `¿Seguro que deseas eliminar el producto ${producto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.productoService.delete(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter( prod => prod !== producto)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              `Producto ${producto.nombre} eliminado con éxito!`,
              'success'
            )
          }
        )

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Operación cancelada',
          'error'
        )
      }
    })
  }

}
