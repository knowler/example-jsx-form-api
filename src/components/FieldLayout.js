import React from 'react';

import Stack from './Stack';

function FieldLayout({
  isFieldset,
  children,
  className,
  label,
  labelFor,
  meta = {},
  style,
}) {
  const Label = isFieldset ? 'label' : 'div';

  const layout = (
    <Stack space={2} className={className} style={style}>
      <Label htmlFor={labelFor} className="font-medium">
        {label}
      </Label>
      {children}
      {'error' in meta && <p>{meta.error}</p>}
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
