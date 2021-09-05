import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.css';

export default function Button({ children }) {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
