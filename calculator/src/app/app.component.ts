import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  resultado: number = 0;

  numeros = {
    numero1: 0,
    numero2: 0,
  };

  sumar() {
    this.resultado = this.numeros.numero1 + this.numeros.numero2;
  }
  restar() {
    this.resultado = this.numeros.numero1 - this.numeros.numero2;

  }
  multiplicar() {
    this.resultado = this.numeros.numero1 * this.numeros.numero2;

  }
  dividir() {
    this.resultado = this.numeros.numero1 / this.numeros.numero2;
    this.resultado = Number(this.resultado.toFixed(2));

  }
}
