import React from 'react';

import Stack from './Stack';

function FieldLayout({
  children,
  className,
  input,
  isFieldset = false,
  label,
  labelFor,
  meta = {},
  style,
}) {
  const Label = isFieldset ? 'div' : 'label';

  const layout = (
    <Stack space={2} className={className} style={style}>
      <Label htmlFor={labelFor} className="font-medium">
        {label}
      </Label>
      {input || children}
      {meta.touched && meta.error && <p>{meta.error}</p>}
    </Stack>
  );

  if (isFieldset) {
    return (
      <fieldset className={className} style={style}>
        <legend className="sr-only">{label}</legend>
        {layout}
      </fieldset>
    );
  }

  return layout;
}

export default FieldLayout;
