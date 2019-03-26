import {
  AddPack,
  GetPackListResults,
  GetPackListResultsSuccess,
  EPackListActions,
  ScanPack
} from './../actions/pack-list.actions';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Pack, PackList } from 'src/app/models/pack-list.interface';
import { PackListService } from 'src/app/services/pack-list.service';
import { selectPacks, selectPackList } from '../selectors/pack-list.selectors';

@Injectable()
export class PackListEffects {
  constructor(
    private packListService: PackListService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  scanPack$ = this.actions$.pipe(
    ofType<ScanPack>(EPackListActions.ScanPack),
    switchMap(() => this.packListService.scanBarcode()),
    switchMap((pack: Pack) => of(new AddPack(pack)))
  );

  @Effect()
  decommissionPack$ = this.actions$.pipe(
    ofType<GetPackListResults>(EPackListActions.GetPackListResults),
    withLatestFrom(this.store.pipe(select(selectPackList))),
    switchMap(([action, storePackList]) =>
      this.packListService.decommissionPacks(storePackList)
    ),
    switchMap((servicePackList: PackList) =>
      of(new GetPackListResultsSuccess(servicePackList))
    )
  );
}
