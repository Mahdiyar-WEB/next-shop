import React from "react";

const TextField = ({
  label = "label",
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  className = "",
  disabled = false,
  min = 0,
  max = 100,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-secondary-900 mb-2">
        {label}
      </label>
      <input
        className={`textField__input ${
          !disabled && "hover:border-primary-300"
        } ${className}`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        min={min}
        max={max}
        name={name}
        id={name}
      />
    </div>
  );
};

export default TextField;
