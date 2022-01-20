import { Action, createReducer, on } from '@ngrx/store';
import {
  decrement,
  dividir,
  increment,
  multiplicar,
  reset,
} from './contador.actions';

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (state) => (state = initialState))
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
