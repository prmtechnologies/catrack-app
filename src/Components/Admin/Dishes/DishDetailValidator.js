// import Validator from 'Validator';
import isEmpty from "lodash/isEmpty";

export default function validateInput(data) {
  let errors = {};

  if (data.division === "") {
    errors.division = "This field is required";
  }

  if (data.name === "") {
    errors.name = "This field is required";
  }

  if (data.description === "") {
    errors.description = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
