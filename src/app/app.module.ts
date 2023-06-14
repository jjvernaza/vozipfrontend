import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { ServicioTecnicoComponent } from './components/servicio-tecnico/servicio-tecnico.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes } from '@angular/router';
import { PagosComponent } from './components/pagos/pagos.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ServiciosComponent,
    ProductosComponent,
    RegistroLoginComponent,
    ServicioTecnicoComponent,
    PagosComponent,
    IniciarSesionComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
