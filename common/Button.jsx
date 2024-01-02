import React from "react";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  children = "name",
  color = "",
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
    return disabled ? "btn-disabled" : colorClasses[color] || "";
  };
  return (
    <button
      className={`btn ${getColorClassName(color)} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
