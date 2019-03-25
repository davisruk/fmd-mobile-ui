import { PackList, Pack } from './../../models/pack-list.interface';
import { Action } from '@ngrx/store';

export enum EPackListActions {
  AddPack = '[PackList] Add Pack',
  RemovePack = '[PackList] Remove Pack',
  ScanPack = '[PackList] Scan Pack',
  GetPackListResults = '[PackList] GetResults',
  GetPackListResultsSuccess = '[PackList] GetResultsSuccess'
}

export class AddPack implements Action {
  public readonly type = EPackListActions.AddPack;
  constructor(public payload: Pack) {}
}

export class RemovePack implements Action {
  public readonly type = EPackListActions.RemovePack;
  constructor(public payload: Pack) {}
}

export class ScanPack implements Action {
  public readonly type = EPackListActions.ScanPack;
}

export class GetPackListResults implements Action {
  public readonly type = EPackListActions.GetPackListResults;
  constructor(public payload: PackList) {}
}

export class GetPackListResultsSuccess implements Action {
  public readonly type = EPackListActions.GetPackListResultsSuccess;
  constructor(public payload: PackList) {}
}

export type PackListActions =
  | AddPack
  | RemovePack
  | ScanPack
  | GetPackListResults
  | GetPackListResultsSuccess;
