import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children, styleProp }) {
  return (
    <button type="button" className={ styleProp }>
      {children}
    </button>
  );
}
Button.defaultProps = {
  styleProp: undefined,
};

Button.propTypes = {
  styleProp: PropTypes.string,
  children: PropTypes.node.isRequired,
};
