import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
    contador: number = 0;

  aumentar() {
    this.contador++;
  }

diminuir() {
  if (this.contador > 0) {
    this.contador--;
  }
}
  resetar() {
  this.contador = 0;
}
}
