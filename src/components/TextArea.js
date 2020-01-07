import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';

function TextArea({className, id, label, meta, name, style, ...inputProps}) {
  const inputId = id || name;

  return (
    <Stack space={2} className={className} style={style}>
      <label htmlFor={inputId} className="font-medium">
        {label}
      </label>
      <textarea
        id={inputId}
        name={name}
        className="form-textarea"
        {...inputProps}
      />
    </Stack>
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default TextArea;
