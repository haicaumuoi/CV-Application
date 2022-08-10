import React from "react";

function InputField({ label, value, id, name, onChange }) {
  if (!id) {
    id = { name };
  }

  return (
    <div className="mt-2 border border-black rounded-sm h-9 ">
      <label htmlFor={id}>
        <span className="hidden">{label}</span>
        <input
          className="rounded-sm h-8 w-full pl-3 outline-none"
          type="text"
          id={id}
          value={value}
          placeholder={label}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default InputField;
