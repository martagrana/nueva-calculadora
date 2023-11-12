import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  resultado: number = 0;
  cifra2: number = 2;
  cifra3: number = 3;

  numeros = {
    numero1: 2,
    numero2: 3,
  };

  sumar() {
    this.resultado = this.cifra2 + this.cifra3;
  }
  restar() {
    this.resultado = this.cifra2 - this.cifra3;

  }
  multiplicar() {
    this.resultado = this.cifra2 * this.cifra3;

  }
  dividir() {
    this.resultado = this.cifra2 / this.cifra3;
    this.resultado = Number(this.resultado.toFixed(2));

  }
}
