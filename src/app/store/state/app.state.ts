import { RouterReducerState } from '@ngrx/router-store';
import { PackListState, initialPackListState } from './pack-list-state';

export interface AppState {
  router?: RouterReducerState;
  packList: PackListState;
}

export const initialAppState: AppState = {
  packList: initialPackListState
};

export function getInitialState(): AppState {
  return initialAppState;
}
