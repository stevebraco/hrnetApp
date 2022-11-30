import React from 'react';
import ButtonStyles from './ButtonStyles';

const Button = ({
  nameButton,
  handleClick,
  isDisabled,
  index,
  numberOfPage,
}) => {
  return (
    <ButtonStyles
      primary={index === numberOfPage}
      className="prev-btn"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {nameButton}
    </ButtonStyles>
  );
};

export default Button;
