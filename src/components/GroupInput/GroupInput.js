import React from 'react';
import PropTypes from 'prop-types';
import { ContainerGroupStyles, Input, Label } from './GroupInputStyles';

const GroupInput = ({ inputName, typeNumber }) => {
  return (
    <ContainerGroupStyles>
      <Label htmlFor={inputName.toLowerCase().replaceAll(' ', '')}>
        {inputName}
      </Label>
      <Input
        type={typeNumber ? 'number' : 'text'}
        id={inputName.toLowerCase().replaceAll(' ', '')}
      />
    </ContainerGroupStyles>
  );
};

export default GroupInput;

GroupInput.propTypes = {
  inputName: PropTypes.string.isRequired,
  typeNumber: PropTypes.bool,
};
