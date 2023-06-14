import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

}

export class TuComponenteComponent {
  mostrarAlerta = true;

  ocultarAlerta() {
    this.mostrarAlerta = false;
  }
}