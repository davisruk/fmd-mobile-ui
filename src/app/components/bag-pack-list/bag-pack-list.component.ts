import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import {
  selectPackList,
  selectPacks
} from 'src/app/store/selectors/pack-list.selectors';

@Component({
  selector: 'app-bag-pack-list',
  templateUrl: './bag-pack-list.component.html',
  styleUrls: ['./bag-pack-list.component.css']
})
export class BagPackListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  packList$ = this.store.pipe(select(selectPacks));

  ngOnInit() {}
}
