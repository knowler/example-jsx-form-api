import React, {Children, cloneElement, useMemo} from 'react';

import FieldLayout from './FieldLayout';

function CheckboxGroup({
  children,
  className,
  label,
  layout: Layout = FieldLayout,
  name,
  style,
  ...props
}) {
  const childrenWithName = useMemo(
    () =>
      Children.map(children, child =>
        cloneElement(child, {name: `${name}.${child.props.name}`}),
      ),
    [children, name],
  );

  return (
    <Layout isFieldset className={className} style={style} label={label}>
      {childrenWithName}
    </Layout>
  );
}

export default CheckboxGroup;
