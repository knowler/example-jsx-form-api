import React from 'react';
import {Form as FinalForm, FormSpy} from 'react-final-form';
import cx from 'classnames';

export function Form({children, className, onSubmit, ...props}) {
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit} className={className}>
          {children}
        </form>
      )}
    />
  );
}

export function Output({className}) {
  return (
    <pre className={cx('whitespace-pre-wrap', className)}>
      <FormSpy
        subscription={{values: true}}
        render={({values}) => JSON.stringify(values, null, 2)}
      />
    </pre>
  );
}
