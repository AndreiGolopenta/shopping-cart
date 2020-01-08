import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters-expansion-panel',
  templateUrl: './filters-expansion-panel.component.html',
  styleUrls: ['./filters-expansion-panel.component.scss']
})
export class FiltersExpansionPanelComponent implements OnInit {

  @Input() parent: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
