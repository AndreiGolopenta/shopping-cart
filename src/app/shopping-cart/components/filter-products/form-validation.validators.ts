import { AbstractControl, FormArray, FormControl } from '@angular/forms';

export class FormValidation {
  static filtersValidation(control: AbstractControl) {
    const formArrays = Object.keys(control.value);

    const result = formArrays.filter((formArray: string) => {
      const arrayValue = control.get(formArray) as FormArray;
      const groupControl = arrayValue.controls.filter(
        (formGrop: AbstractControl) => {
          const formControl = formGrop.get('checked') as FormControl;
          return formControl.value;
        }
      );
      return groupControl.length;
    });

    return result.length ? null : { invalid: true };
  }
}
