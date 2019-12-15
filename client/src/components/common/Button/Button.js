import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({children, ...otherProps }) => (
  <button { ...otherProps } className={`button`}>
    { children }
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Button;
