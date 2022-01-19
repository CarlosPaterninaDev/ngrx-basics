import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  public contador = 0;

  constructor() {}

  ngOnInit(): void {}

  incrementar() {
    this.contador += 1;
  }
  decrementar() {
    this.contador -= 1;
  }
}
