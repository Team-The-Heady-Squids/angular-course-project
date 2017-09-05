import { Validators } from '@angular/forms';

export class UserValidator {
  static usernameField = {
    minLength: 2,
    maxLength: 20
  };

  static passHashField = {
    minLength: 6,
    maxLength: 40
  };

  static usernameValidators = Validators.compose([
    Validators.required,
    Validators.minLength(UserValidator.usernameField.minLength),
    Validators.maxLength(UserValidator.usernameField.maxLength)
  ]);

  static passHashValidators = Validators.compose([
    Validators.required,
    Validators.minLength(UserValidator.passHashField.minLength),
    Validators.maxLength(UserValidator.passHashField.maxLength)
  ]);

}
