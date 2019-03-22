import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagPackListComponent } from './bag-pack-list.component';

describe('BagPackListComponent', () => {
  let component: BagPackListComponent;
  let fixture: ComponentFixture<BagPackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagPackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagPackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
