import { PackList } from 'src/app/models/pack-list.interface';

export interface PackListState {
  packList: PackList;
}
export const initialPackListState: PackListState = {
  packList: {
    packs: []
  }
};
