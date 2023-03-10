import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { initialStaste } from './counter.state';

const _counterReducer = createReducer(
  initialStaste,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  })
);
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
