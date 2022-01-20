import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';
@Component({
  selector: 'app-nieto-ngrx',
  templateUrl: './nieto-ngrx.component.html',
  styleUrls: ['./nieto-ngrx.component.css'],
})
export class NietoNgrxComponent implements OnInit {
  contadorNieto = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((state) => (this.contadorNieto = state));
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
