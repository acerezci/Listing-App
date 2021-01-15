import { ValuesProps } from "../Hooks/useForm";

const validate: ValidateType = (values: ValuesProps): ValidateProps => {
  const errors: ValidateProps = {};

  if (!values.linkName.trim()) {
    errors.linkName = "Link Name required";
  }

  return errors;
};

export interface ValidateProps {
  [key: string]: string;
}

export type ValidateType = (p: ValuesProps) => ValidateProps;

export default validate;
