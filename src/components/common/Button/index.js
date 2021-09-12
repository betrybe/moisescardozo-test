import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children, styleButtonProp, onClick, btnType }) {
  const btnTam = btnType.length > 0 ? btnType : 'button';
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={ btnTam } className={ styleButtonProp } onClick={ onClick }>
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
