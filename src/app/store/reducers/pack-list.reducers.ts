import { PackListState } from './../state/pack-list-state';
import {
  PackListActions,
  EPackListActions
} from './../actions/pack-list.actions';
import { initialPackListState } from '../state/pack-list-state';
import { Pack, PackList } from 'src/app/models/pack-list.interface';

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
    case EPackListActions.RemovePack: {
      let packs: Pack[] = Object.assign([], state.packList.packs);
      packs = packs.filter(
        el =>
          el.gtin !== action.payload.gtin &&
          el.serialNumber !== action.payload.serialNumber
      );
      return {
        ...state,
        packList: {
          packs
        }
      };
    }

    case EPackListActions.GetPackListResultsSuccess: {
      const packList: PackList = Object.assign({}, action.payload);
      return {
        ...state,
        packList
      };
    }

    default:
      return state;
  }
};
