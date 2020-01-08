import React, {Children, cloneElement, useMemo} from 'react';

import FieldLayout from './FieldLayout';

function RadioGroup({
  children,
  className,
  label,
  layout: Layout = FieldLayout,
  name,
  style,
  ...props
}) {
  const childrenWithName = useMemo(
    () => Children.map(children, child => cloneElement(child, {name})),
    [children, name],
  );

  return (
    <Layout
      isFieldset
      className={className}
      style={style}
      label={label}
      input={childrenWithName}
    />
  );
}

export default RadioGroup;
