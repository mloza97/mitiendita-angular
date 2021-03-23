import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComprasComponent } from './carritocompras/carritocompras.component';
import { LoginComponent } from './login/login.component';
import { UltimasComprasComponent } from './ultimas-compras/ultimas-compras.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './agregar-producto/form.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from './agregar-producto/producto.service';
import { DetalleComponent } from './agregar-producto/detalle/detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full' },
  {path: 'agregarProd', component: AgregarProductoComponent },
  {path: 'ultimasCompras', component: UltimasComprasComponent },
  {path: 'productos', component: ProductosComponent },
  {path: 'agregarProd/form', component: FormComponent },
  {path: 'agregarProd/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComprasComponent,
    LoginComponent,
    UltimasComprasComponent,
    AgregarProductoComponent,
    FormComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
