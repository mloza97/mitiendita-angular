import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { LoginComponent } from './login/login.component';
import { UltimasComprasComponent } from './ultimas-compras/ultimas-compras.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComprasComponent,
    LoginComponent,
    UltimasComprasComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
