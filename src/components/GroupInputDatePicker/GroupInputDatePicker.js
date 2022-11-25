import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Label } from '../GroupInput/GroupInputStyles';
import GroupInputDatePickerStyles from './GroupInputDatePickerStyles';

const GroupInputDatePicker = ({ inputName, state, setState }) => {
  return (
    <GroupInputDatePickerStyles>
      <Label htmlFor={inputName.toLowerCase().replaceAll(' ', '')}>
        {inputName}
      </Label>
      <ReactDatePicker
        id={inputName.toLowerCase().replaceAll(' ', '')}
        dateFormat="dd/MM/yyyy"
        selected={state}
        onChange={(state) => setState(state)}
      />
    </GroupInputDatePickerStyles>
  );
};

export default GroupInputDatePicker;
