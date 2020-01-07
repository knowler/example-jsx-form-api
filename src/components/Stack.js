import React, {Children, cloneElement, useMemo} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Stack({
  align = 'start',
  as: Element = 'div',
  children,
  className,
  space = 0,
  ...props
}) {
  const spacedChildren = useMemo(
    () =>
      Children.map(
        children,
        (child, index) =>
          child &&
          cloneElement(child, {
            className: cx(
              index > 0 ? `mt-${space}` : 'my-0',
              child.props.className,
            ),
          }),
      ),
    [children, space],
  );

  return (
    <Element
      className={cx('flex flex-col', `items-${align}`, className)}
      {...props}
    >
      {spacedChildren}
    </Element>
  );
}

Stack.propTypes = {
  align: PropTypes.oneOf(['start', 'end', 'stretch', 'center']),
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  space: PropTypes.number,
};

export default Stack;
