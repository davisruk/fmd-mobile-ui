import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { PackListState } from '../state/pack-list-state';
import { PackList } from 'src/app/models/pack-list.interface';

const selectPackListState = (state: AppState) => state.packList;

export const selectPackList = createSelector(
  selectPackListState,
  (state: PackListState) => state.packList
);

export const selectPacks = createSelector(
  selectPackList,
  (packList: PackList) => packList.packs
);
