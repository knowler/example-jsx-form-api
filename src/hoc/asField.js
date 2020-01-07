import React from 'react';
import {useField} from 'react-final-form';

function asField(Component, type) {
  const forwardRef = React.forwardRef(({name, ...props}, userRef) => {
    const {input, meta} = useField(name, {type, ...props});

    return <Component ref={userRef} {...input} {...props} meta={meta} />;
  });

  forwardRef.displayName = `asField(${Component.name})`;

  return forwardRef;
}

export default asField;
