import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent implements OnInit {
  @Input() contadorNieto = 0;
  @Output() resetContador = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.contadorNieto = 0;
    this.resetContador.emit(this.contadorNieto);
  }
}
