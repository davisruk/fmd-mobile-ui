import { PackList, Pack } from './../../models/pack-list.interface';
import { Action } from '@ngrx/store';

export enum EPackListActions {
  AddPack = '[PackList] Add Pack',
  RemovePack = '[PackList] Remove Pack',
  ScanPack = '[PackList] Scan Pack',
  GetPackListResults = '[PackList] GetResults'
}

export class AddPack implements Action {
  public readonly type = EPackListActions.AddPack;
  constructor(public payload: Pack) {}
}

export class RemovePack implements Action {
  public readonly type = EPackListActions.RemovePack;
}

export class ScanPack implements Action {
  public readonly type = EPackListActions.ScanPack;
}

export class GetPackListResults implements Action {
  public readonly type = EPackListActions.ScanPack;
}

export type PackListActions =
  | AddPack
  | RemovePack
  | ScanPack
  | GetPackListResults;
