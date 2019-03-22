import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
  LoadConfigs = '[Config] Load Configs',
  LoadConfigsSuccess = '[Config] Load Configs Success',
  LoadConfigsFailure = '[Config] Load Configs Failure',
}

export class LoadConfigs implements Action {
  readonly type = ConfigActionTypes.LoadConfigs;
}

export class LoadConfigsSuccess implements Action {
  readonly type = ConfigActionTypes.LoadConfigsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadConfigsFailure implements Action {
  readonly type = ConfigActionTypes.LoadConfigsFailure;
  constructor(public payload: { error: any }) { }
}

export type ConfigActions = LoadConfigs | LoadConfigsSuccess | LoadConfigsFailure;

