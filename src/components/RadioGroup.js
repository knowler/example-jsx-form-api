import React, {Children, cloneElement, useMemo} from 'react';

import Stack from './Stack';

function RadioGroup({children, className, label, name, style, ...props}) {
  const childrenWithName = useMemo(
    () => Children.map(children, child => cloneElement(child, {name})),
    [children, name],
  );

  return (
    <fieldset className={className} style={style}>
      <legend className="sr-only">{label}</legend>
      <Stack space={2}>
        <div aria-hidden className="font-medium">
          {label}
        </div>
        <Stack space={1}>{childrenWithName}</Stack>
      </Stack>
    </fieldset>
  );
}

export default RadioGroup;
