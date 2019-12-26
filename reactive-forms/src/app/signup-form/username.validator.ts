import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidations {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string ).indexOf(' ') >= 0) {
      return { cannotContainSpace : true };
    } else {
      return null;
    }
  }
  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => {
      if (control.value === 'jorge') {
        return { shouldBeUnique: true };
      } else {
        return null;
      }
     }, 2000);
     return null;
  }
}
