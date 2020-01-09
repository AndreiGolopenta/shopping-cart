import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-active-filters',
  templateUrl: './info-active-filters.component.html',
  styleUrls: ['./info-active-filters.component.scss']
})
export class InfoActiveFiltersComponent {

  @Input() activeFilters: string[];

  @Output() removeFilter = new EventEmitter<string>();

  handleRemoveFilter(value: string) {
    this.removeFilter.emit(value);
  }

}
