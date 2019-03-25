import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagPackResultsComponent } from './bag-pack-results.component';

describe('BagPackResultsComponent', () => {
  let component: BagPackResultsComponent;
  let fixture: ComponentFixture<BagPackResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagPackResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagPackResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
