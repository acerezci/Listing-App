import React, { useEffect, useState } from "react";
import { ValidateProps, ValidateType } from "./../../utils/validate";

const useForm = (validate: ValidateType, callback: () => void) => {
  const [values, setValues] = useState<ValuesProps>({
    linkName: "",
  });

  const [errors, setErrors] = useState<ValidateProps>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validate(values));

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export interface ValuesProps {
  [key: string]: string;
}

export default useForm;
