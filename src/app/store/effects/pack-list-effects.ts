import { AddPack } from './../actions/pack-list.actions';
import { EPackListActions, ScanPack } from '../actions/pack-list.actions';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pack } from 'src/app/models/pack-list.interface';
import { PackListService } from 'src/app/services/pack-list.service';
import { selectPacks } from '../selectors/pack-list.selectors';

@Injectable()
export class PackListEffects {
  pack$ = this.store.pipe(select(selectPacks));
  packsLength: number;
  constructor(
    private packListService: PackListService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {
    this.pack$.subscribe(p => (this.packsLength = p.length));
  }

  @Effect()
  scanPack$ = this.actions$.pipe(
    ofType<ScanPack>(EPackListActions.ScanPack),
    switchMap(() => this.packListService.scanBarcode(this.packsLength)),
    switchMap((pack: Pack) => of(new AddPack(pack)))
  );
}
