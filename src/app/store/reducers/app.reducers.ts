import { routerReducer } from '@ngrx/router-store';
import { packListReducers } from './pack-list.reducers';
import { ActionReducerMap, Action } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { configReducers } from './config.reducer';

export const appReducers: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
  packList: packListReducers,
  config: configReducers
};
