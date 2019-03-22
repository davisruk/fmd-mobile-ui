import { Component, OnInit, Input } from '@angular/core';
import { Pack } from 'src/app/models/pack-list.interface';

@Component({
  selector: 'app-pack-detail',
  templateUrl: './pack-detail.component.html',
  styleUrls: ['./pack-detail.component.css']
})
export class PackDetailComponent implements OnInit {
  @Input() pack: Pack;

  constructor() {}

  ngOnInit() {}
}
