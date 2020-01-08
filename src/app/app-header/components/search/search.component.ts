import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { upDown, leftRight } from '../../../animations/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [upDown, leftRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  
  searchIconAnimation: boolean = false;
  inputFocusAnimation: boolean = false;

  @Output() searchValue = new EventEmitter<string>();

  ngOnInit() {}

  onMouseEnter() {
    this.searchIconAnimation = !this.searchIconAnimation;
  }

  onMouseLeave() {
    this.searchIconAnimation = !this.searchIconAnimation;
  }

  onFocus() {
    this.inputFocusAnimation = !this.inputFocusAnimation;
  }

  onBlur() {
    this.inputFocusAnimation = !this.inputFocusAnimation;
  }

  onInput(value: string) {
    this.searchValue.emit(value);
  }
}
