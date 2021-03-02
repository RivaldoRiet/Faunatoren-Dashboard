import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
        if (!control.value) {
            return null;
        }

        const valid = regex.test(control.value);

        return valid ? null : error;
    };
}
