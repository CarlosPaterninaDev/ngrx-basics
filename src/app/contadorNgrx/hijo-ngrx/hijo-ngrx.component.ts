import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo-ngrx',
  templateUrl: './hijo-ngrx.component.html',
  styleUrls: ['./hijo-ngrx.component.css'],
})
export class HijoNgrxComponent implements OnInit {
  public contadorHijo = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((state) => (this.contadorHijo = state));
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 10 }));
  }
  dividir() {
    this.store.dispatch(actions.dividir({ numero: 10 }));
  }
}
