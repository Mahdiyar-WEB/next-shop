import React from "react";

const Button = ({
  type = "button",
  onClick,
  disabled = false,
  children = "name",
  color = "",
  className,
  isPending = false,
}) => {
  const getColorClassName = (color) => {
    const colorClasses = {
      primary: "btn-primary",
      info: "btn-info",
      danger: "btn-danger",
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
      {isPending ? (
        <div
          className="flex mx-auto h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
