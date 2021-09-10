import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children, styleButtonProp, onClick }) {
  return (
    <button type="button" className={ styleButtonProp } onClick={ onClick }>
      {children}
    </button>
  );
}
Button.defaultProps = {
  styleButtonProp: undefined,
  onClick: undefined,
};

Button.propTypes = {
  styleButtonProp: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
