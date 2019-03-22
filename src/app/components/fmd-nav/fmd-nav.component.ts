import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fmd-nav',
  templateUrl: './fmd-nav.component.html',
  styleUrls: ['./fmd-nav.component.css']
})
export class FmdNavComponent {
  /*
  isZebra$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
  */
  constructor() {}
}
