import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pack } from '../models/pack-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PackListService {
  private packsToScan: Pack[] = [
    {
      gtin: 'GTIN1',
      serialNumber: 'Serial1',
      batch: 'Batch1',
      expiry: '01/01/01'
    },
    {
      gtin: 'GTIN2',
      serialNumber: 'Serial2',
      batch: 'Batch2',
      expiry: '02/02/02'
    }
  ];

  constructor() {}

  scanBarcode(packIndex: number): Observable<Pack> {
    if (packIndex >= this.packsToScan.length) {
      packIndex = packIndex % this.packsToScan.length;
    }
    return of(this.packsToScan[packIndex]);
  }
}
