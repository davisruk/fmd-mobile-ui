import { RouterReducerState } from '@ngrx/router-store';
import { PackListState, initialPackListState } from './pack-list-state';
import { ConfigState, initialConfigState } from './config.state';

export interface AppState {
  router?: RouterReducerState;
  packList: PackListState;
  config: ConfigState;
}

export const initialAppState: AppState = {
  packList: initialPackListState,
  config: initialConfigState
};

export function getInitialState(): AppState {
  return initialAppState;
}
