import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Box({ children, styleProp }) {
  return (
    <div className={ styleProp }>
      {children}
    </div>
  );
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  styleProp: PropTypes.string.isRequired,
};
