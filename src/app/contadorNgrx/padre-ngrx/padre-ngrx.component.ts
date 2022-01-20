import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-padre-ngrx',
  templateUrl: './padre-ngrx.component.html',
  styleUrls: ['./padre-ngrx.component.css'],
})
export class PadreNgrxComponent implements OnInit {
  public contador = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('contador').subscribe((state) => (this.contador = state));
  }

  incrementar() {
    this.store.dispatch(actions.increment());
  }
  decrementar() {
    this.store.dispatch(actions.decrement());
  }
}
