import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';

function Select({className, id, label, meta, name, style, ...inputProps}) {
  const inputId = id || name;

  return (
    <Stack space={2} className={className} style={style}>
      <label htmlFor={inputId} className="font-medium">
        {label}
      </label>
      <select
        id={inputId}
        name={name}
        className="form-select"
        {...inputProps}
      />
    </Stack>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Select;
