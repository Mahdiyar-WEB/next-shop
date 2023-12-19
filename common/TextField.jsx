import React from "react";

const TextField = ({
  label = "label",
  type = "text",
  name,
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-secondary-900 mb-2">{label}</label>
      <input
        className="textField__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
    </div>
  );
};

export default TextField;
