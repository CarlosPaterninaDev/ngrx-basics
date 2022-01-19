import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  @Input() contadorHijo = 0;
  @Output() contadorPadre = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiplicar() {
    this.contadorHijo *= 2;
    this.contadorPadre.emit(this.contadorHijo);
  }
  dividir() {
    this.contadorHijo /= 2;
    this.contadorPadre.emit(this.contadorHijo);
  }

  resetContador(ev: any) {
    this.contadorPadre.emit(ev);
  }
}
