import React from "react";

const Input: React.FC<Props> = ({
  label,
  id,
  type,
  containerClass,
  inputClass,
  labelClass,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <div className={containerClass}>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <input
      data-testid="input"
      className={inputClass}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

type inputType = "text" | "number";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  type: inputType;
  containerClass: string;
  labelClass: string;
  inputClass: string;
  value: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
