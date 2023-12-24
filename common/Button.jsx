import React from "react";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  name = "name",
  color = "primary",
  className,
}) => {
  const getColorClassName = (color) => {
    const colorClasses = {
      primary: "btn-primary",
      info: "btn-info",
      error: "btn-error",
      success: "btn-success",
      warning: "btn-warning",
    };
    return colorClasses[color] || "";
  };
  return (
    <button
      className={`btn ${getColorClassName(color)} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
