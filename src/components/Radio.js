import React from 'react';

function Radio({className, id, label, meta, name, value, ...inputProps}) {
  const inputId = id || `${name}.${value}`;

  return (
    <div className={className}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        className="form-radio"
        {...inputProps}
      />
      <label className="ml-2" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}

export default Radio;
