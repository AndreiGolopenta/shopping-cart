import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownListComponent implements OnInit {
  data: string[] = ['Popularity', 'Price ascending', 'Price descending'];
  
  @Input() stock: number;
  @Input() selectionStock: number;
  @Input() sortBy: string;

  @Output() sendSortBy = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form.get('sortBy').setValue(this.sortBy);
  }

  form: FormGroup = this.fb.group({
    sortBy: ['']
  });

  onSelect(event: string) {
    this.form.get('sortBy').setValue(event);
    this.sendSortBy.emit(event);
  }
}
