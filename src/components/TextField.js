import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';

function TextField({
  className,
  id,
  label,
  meta,
  name,
  style,
  type = 'text',
  ...inputProps
}) {
  const inputId = id || name;

  return (
    <Stack space={2} className={className} style={style}>
      <label htmlFor={inputId} className="font-medium">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        className="form-input"
        {...inputProps}
      />
    </Stack>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'email']),
};

export default TextField;
