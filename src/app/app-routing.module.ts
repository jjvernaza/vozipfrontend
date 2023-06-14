import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioTecnicoComponent } from './components/servicio-tecnico/servicio-tecnico.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { PagosComponent } from './components/pagos/pagos.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicio-tecnico', component: ServicioTecnicoComponent },
  { path: 'registro-login', component: RegistroLoginComponent},
  { path: 'pagos', component: PagosComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
