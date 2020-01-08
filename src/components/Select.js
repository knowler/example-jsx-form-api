import React from 'react';
import PropTypes from 'prop-types';

import FieldLayout from './FieldLayout';

function Select({
  className,
  id,
  label,
  layout: Layout = FieldLayout,
  meta,
  name,
  style,
  ...inputProps
}) {
  const inputId = id || name;

  return (
    <Layout
      className={className}
      style={style}
      label={label}
      labelFor={inputId}
      meta={meta}
      input={
        <select
          id={inputId}
          name={name}
          className="form-select"
          {...inputProps}
        />
      }
    />
  );
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  layout: PropTypes.elementType,
  meta: PropTypes.object,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Select;
