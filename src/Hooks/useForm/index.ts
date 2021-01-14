import React, { useState } from "react";
import { ValidateProps, ValidateType } from "./../../utils/validate";

const useForm = (validate: ValidateType) => {
  const [values, setValues] = useState<ValuesProps>({
    linkName: "",
  });

  const [errors, setErrors] = useState<ValidateProps>({
    linkName: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export interface ValuesProps {
  linkName: string;
}

export default useForm;
