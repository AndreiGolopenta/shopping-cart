import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActiveFiltersComponent } from './info-active-filters.component';

describe('InfoActiveFiltersComponent', () => {
  let component: InfoActiveFiltersComponent;
  let fixture: ComponentFixture<InfoActiveFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoActiveFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActiveFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
