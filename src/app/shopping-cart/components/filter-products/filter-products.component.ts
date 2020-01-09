import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Category, Filters } from '../../models/filters.interface';
import { FormValidation } from './form-validation.validators';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit, OnDestroy {
  
  filtersSubscription: Subscription;
  form: FormGroup;

  @Input() filters$: Observable<Filters>;
  @Input() activeFilters: string[];

  @Output() sendFilters = new EventEmitter<Filters>();
  @Output() removeAllFilters = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filtersSubscription = this.filters$.subscribe((filters: Filters) => {
      this.form = this.fb.group(
        {
          manufacturer: this.fb.array(
            this.createFormGroup(filters['manufacturer'])
          ),
          size: this.fb.array(this.createFormGroup(filters['size'])),
          season: this.fb.array(this.createFormGroup(filters['season'])),
          for: this.fb.array(this.createFormGroup(filters['for'])),
          material: this.fb.array(this.createFormGroup(filters['material']))
        },
        { validator: FormValidation.filtersValidation }
      );
    });
  }

  ngOnDestroy() {
    this.filtersSubscription.unsubscribe();
  }

  createFormGroup(data: Category[]) {
    const formArray = [];
    for (let el of data) {
      const group = this.fb.group({
        name: [el.name],
        checked: [el.checked]
      });
      formArray.push(group);
    }
    return formArray;
  }

  onSubmit() {
    this.sendFilters.emit(this.form.value);
  }

  handleRemoveAllFilters() {
    this.removeAllFilters.emit();
  }
}
