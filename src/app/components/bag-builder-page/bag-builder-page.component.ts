import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import {
  ScanPack,
  GetPackListResults
} from 'src/app/store/actions/pack-list.actions';
import { selectPackList } from 'src/app/store/selectors/pack-list.selectors';
import { PackList } from 'src/app/models/pack-list.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bag-builder-page',
  templateUrl: './bag-builder-page.component.html',
  styleUrls: ['./bag-builder-page.component.css']
})
export class BagBuilderPageComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {}

  onScanClicked() {
    this.store.dispatch(new ScanPack());
  }

  onDecommissionClicked() {
    this.store.dispatch(new GetPackListResults());
  }
}
