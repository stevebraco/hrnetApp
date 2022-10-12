import React from 'react';
import ButtonStyles from './ButtonStyles';

const Button = ({
  nameButton,
  handleClick,
  isDisabled,
  primary,
  index,
  numberOfPage,
}) => {
  console.log(primary);
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
