import React from 'react';

import Stack from './Stack';

function FieldLayout({children, className, label, labelFor, meta, style}) {
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
}

export default FieldLayout;
