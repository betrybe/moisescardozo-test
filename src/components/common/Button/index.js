import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children, styleButtonProp }) {
  return (
    <button type="button" className={ styleButtonProp }>
      {children}
    </button>
  );
}
Button.defaultProps = {
  styleButtonProp: undefined,
};

Button.propTypes = {
  styleButtonProp: PropTypes.string,
  children: PropTypes.node.isRequired,
};
