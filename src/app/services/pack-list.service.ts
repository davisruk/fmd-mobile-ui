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

  private templateGoodResult: FMDResult = {
    packState: 'INACTIVE',
    nmvsCode: 'NMVS_SUCCESS',
    packReason: 'Successfully Decommissioned'
  };

  private templateBadResult: FMDResult = {
    packState: 'UNKNOWN',
    nmvsCode: 'NMVS_UNKNOWN',
    packReason: 'Product Unknown to NMVS'
  };

  private templateWarnResult: FMDResult = {
    packState: 'INACTIVE',
    nmvsCode: 'NMVS_PCK_ALREADY_INACTIVE',
    packReason: 'Pack has already been decommissioned'
  };

  private results: FMDResult[] = [
    this.templateGoodResult,
    this.templateBadResult,
    this.templateWarnResult
  ];

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
    let i = 0;
    retPackList.packs.forEach(pack => {
      pack.fmdResult = this.results[i % 3];
      i++;
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
