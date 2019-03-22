import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagResultsPageComponent } from './bag-results-page.component';

describe('BagResultsPageComponent', () => {
  let component: BagResultsPageComponent;
  let fixture: ComponentFixture<BagResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
