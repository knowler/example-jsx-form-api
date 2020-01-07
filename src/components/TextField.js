import React from 'react';
import PropTypes from 'prop-types';

import Stack from './Stack';

const FieldLayout = ({children, className, label, labelFor, meta, style}) => {
  const {error} = meta;

  return (
    <Stack space={2} className={className} style={style}>
      <label htmlFor={labelFor} className="font-medium">
        {label}
      </label>
      {children}
      {error && <p>{error}</p>}
    </Stack>
  );
};

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
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.oneOf(['text', 'email']),
};

export default TextField;
