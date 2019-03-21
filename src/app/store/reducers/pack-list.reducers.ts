import { PackListState } from './../state/pack-list-state';
import {
  PackListActions,
  EPackListActions
} from './../actions/pack-list.actions';
import { initialPackListState } from '../state/pack-list-state';
import { Pack } from 'src/app/models/pack-list.interface';

export const packListReducers = (
  state = initialPackListState,
  action: PackListActions
): PackListState => {
  switch (action.type) {
    case EPackListActions.AddPack: {
      const packs: Pack[] = Object.assign([], state.packList.packs);
      packs.push(action.payload);
      return {
        ...state,
        packList: {
          packs
        }
      };
    }
    default:
      return state;
  }
};
