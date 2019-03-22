import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagBuilderPageComponent } from './bag-builder-page.component';

describe('BagBuilderPageComponent', () => {
  let component: BagBuilderPageComponent;
  let fixture: ComponentFixture<BagBuilderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagBuilderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagBuilderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
