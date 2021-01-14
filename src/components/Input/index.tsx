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
        defaultValue={props.value}
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
}

export default Input;
