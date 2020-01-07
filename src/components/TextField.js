import React from 'react';
import PropTypes from 'prop-types';

import FieldLayout from './FieldLayout';

function TextField({
  className,
  id,
  label,
  layout: Layout = FieldLayout,
  meta,
  name,
  style,
  type = 'text',
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
    >
      <input
        id={inputId}
        name={name}
        type={type}
        className="form-input"
        {...inputProps}
      />
    </Layout>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  layout: PropTypes.elementType,
  meta: PropTypes.object,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'email']),
};

export default TextField;
