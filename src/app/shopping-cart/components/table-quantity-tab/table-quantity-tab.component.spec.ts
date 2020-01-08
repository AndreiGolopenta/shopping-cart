import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuantityTabComponent } from './table-quantity-tab.component';

describe('TableQuantityTabComponent', () => {
  let component: TableQuantityTabComponent;
  let fixture: ComponentFixture<TableQuantityTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableQuantityTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuantityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
