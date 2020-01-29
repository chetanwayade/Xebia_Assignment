import * as c from '../constants/formFields-constant';

export default function validate(values, isTouched) {
    const errors = {};

    if (isTouched.username) {
      if (!values.username) {
          errors.username = c.USERNAME_REQUIRED;
      }
    }

    if (isTouched.password) {
      if (!values.password) {
        errors.password = c.PASSWORD_REQUIRED;
      }
    }

    return errors;
  };