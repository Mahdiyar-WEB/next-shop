import React from "react";

const CheckBox = ({ title, value, onChange, name, id, checked }) => {
  return (
    <div className="flex items-center gap-2 text-secondary-600">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        className="cursor-pointer form-checkbox rounded-[5px] w-4 h-4 border-none bg-secondary-100/80 checked:text-primary-900"
      />
      <label htmlFor={id} className="cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
