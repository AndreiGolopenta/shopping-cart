import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersExpansionPanelComponent } from './filters-expansion-panel.component';

describe('FiltersExpansionPanelComponent', () => {
  let component: FiltersExpansionPanelComponent;
  let fixture: ComponentFixture<FiltersExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
