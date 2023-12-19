import React from "react";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  name = "name",
  className,
}) => {
  return (
    <button
      className={`button__input ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
