import { FormValuesProps } from "./../Hooks/useForm/index";

const validate: ValidateType = (values: FormValuesProps): ValidateProps => {
  const errors: ValidateProps = {};

  if (!values.linkName.trim()) {
    errors.linkName = "Link Name required";
  }

  return errors;
};

export interface ValidateProps {
  [key: string]: string;
}

export type ValidateType = (p: FormValuesProps) => ValidateProps;

export default validate;
