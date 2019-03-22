import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { ScanPack } from 'src/app/store/actions/pack-list.actions';

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
    this.router.navigate(['bag-results']);
  }
}
