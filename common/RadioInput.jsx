import React from "react";

const RadioInput = ({ value, checked, onChange, name, title, id }) => {
  return (
    <div className="flex items-center gap-2 text-secondary-600">
      <input
        type="radio"
        value={value}
        checked={checked}
        id={title}
        name={name}
        onChange={onChange}
        className="cursor-pointer form-radio rounded-[5px] w-4 h-4 border-none bg-secondary-100/80 checked:text-primary-900"
      />
      <label htmlFor={title} className="cursor-pointer">
        {title}
      </label>
    </div>
  );
};

export default RadioInput;
