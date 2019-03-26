import { Component, OnInit, Input } from '@angular/core';
import { Pack } from 'src/app/models/pack-list.interface';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { RemovePack } from 'src/app/store/actions/pack-list.actions';

@Component({
  selector: 'app-pack-detail',
  templateUrl: './pack-detail.component.html',
  styleUrls: ['./pack-detail.component.css']
})
export class PackDetailComponent implements OnInit {
  @Input() pack: Pack;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onDelete() {
    this.store.dispatch(new RemovePack(this.pack));
  }

  getPanelIcon(): string {
    if (this.pack.fmdResult != null) {
      if (this.pack.fmdResult.nmvsCode === 'NMVS_SUCCESS') {
        return 'check_circle';
      } else if (this.pack.fmdResult.nmvsCode === 'NMVS_UNKNOWN') {
        return 'warning';
      } else {
        return 'cancel';
      }
    }
    return '';
  }

  getPackHeaderClass(): string {
    if (this.pack.fmdResult != null) {
      if (this.pack.fmdResult.nmvsCode === 'NMVS_SUCCESS') {
        return 'green-icon';
      } else if (this.pack.fmdResult.nmvsCode === 'NMVS_UNKNOWN') {
        return 'amber-icon';
      } else {
        return 'red-icon';
      }
    }
    return '';
  }
}
