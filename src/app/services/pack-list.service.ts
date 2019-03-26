import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pack, FMDResult, PackList } from '../models/pack-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PackListService {
  private templatePack: Pack = {
    gtin: 'GTIN-',
    serialNumber: 'Serial-',
    batch: 'Batch-',
    expiry: '01/01/01'
  };

  constructor() {}

  scanBarcode(): Observable<Pack> {
    const packIndex = this.getRandomInt(1, 10000);
    const retPack = Object.assign({}, this.templatePack);
    retPack.gtin = ('' + packIndex).padStart(14, '0');
    retPack.serialNumber = retPack.serialNumber + packIndex;
    retPack.batch = retPack.serialNumber + packIndex;
    retPack.expiry = this.getRandomDate(
      new Date(2019, 4, 1),
      new Date(2021, 4, 1)
    ).toLocaleDateString('en-UK');
    return of(retPack);
  }

  decommissionPacks(packList: PackList): Observable<PackList> {
    // use JSON to create a deep copy of the original request
    // when we use an http call we will receive a brand new structure
    // so this mimics that use case
    const retPackList: PackList = JSON.parse(JSON.stringify(packList));
    retPackList.packs.forEach(pack => {
      pack.fmdResult = {
        packState: 'INACTIVE',
        nmvsCode: 'NMVS_SUCCESS',
        packReason: 'Successfully Decommissioned'
      };
    });
    return of(retPackList);
  }

  private getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private getRandomDate(start, end): Date {
    const date = new Date(+start + Math.random() * (end - start));
    return date;
  }
}
