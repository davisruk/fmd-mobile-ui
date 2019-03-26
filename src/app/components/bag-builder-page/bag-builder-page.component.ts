import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import {
  ScanPack,
  GetPackListResults
} from 'src/app/store/actions/pack-list.actions';

@Component({
  selector: 'app-bag-builder-page',
  templateUrl: './bag-builder-page.component.html',
  styleUrls: ['./bag-builder-page.component.css']
})
export class BagBuilderPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onScanClicked() {
    this.store.dispatch(new ScanPack());
  }

  onDecommissionClicked() {
    this.store.dispatch(new GetPackListResults());
  }
}
