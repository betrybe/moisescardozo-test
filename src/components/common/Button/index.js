import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children, styleButtonProp, onClick, btnType }) {
  return (
    <button
      type={ btnType ? 'button' : 'submit' }
      className={ styleButtonProp }
      onClick={ onClick }
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  styleButtonProp: undefined,
  onClick: undefined,
  btnType: 'button',
};

Button.propTypes = {
  styleButtonProp: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  btnType: PropTypes.string,
};
