import React from 'react';

function Checkbox({className, id, label, meta, name, value, ...inputProps}) {
  const inputId = id || name;

  return (
    <div className={className}>
      <input
        type="checkbox"
        id={inputId}
        name={name}
        value={value}
        className="form-checkbox"
        {...inputProps}
      />
      <label className="ml-2" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
