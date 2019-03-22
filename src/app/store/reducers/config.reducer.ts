import { Action } from '@ngrx/store';
import { ConfigState, initialConfigState } from '../state/config.state';

export function configReducers(
  state: ConfigState = initialConfigState,
  action: Action
): ConfigState {
  switch (action.type) {
    default:
      return state;
  }
}
