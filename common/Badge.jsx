import React from "react";

const Badge = ({ title, icon, className, color }) => {
  const getColorClassName = (color) => {
    const colorClasses = {
      primary: "badge-primary",
      info: "badge-info",
      danger: "badge-danger",
      success: "badge-success",
      warning: "badge-warning",
    };
    return colorClasses[color] || "";
  };
  return (
    <div
      className={`border w-fit px-2 py-1 flex gap-[2px] items-center rounded-lg ${className} ${getColorClassName(
        color
      )}`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default Badge;
