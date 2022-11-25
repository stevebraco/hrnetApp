import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Label } from '../GroupInput/GroupInputStyles';
import { GroupDropdownStyles } from './GroupDropdownStyles';

const GroupDropdown = ({ name, options, onChange, value }) => {
  return (
    <GroupDropdownStyles>
      <Label htmlFor="name">{name}</Label>
      <Dropdown id="name" options={options} onChange={onChange} value={value} />
    </GroupDropdownStyles>
  );
};

export default GroupDropdown;
