import React from "react";

const Input: React.FC<Props> = (props) => {
  return (
    <div className={props.containerClass}>
      <label htmlFor={props.id} className={props.labelClass}>
        {props.label}
      </label>
      <input
        className={props.inputClass}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

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
