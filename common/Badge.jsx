import React from "react";

const Badge = ({ title, icon, className }) => {
  return (
    <div
      className={`border w-fit px-2 py-1 text-xs flex gap-[2px] items-center rounded-lg ${className}`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default Badge;
