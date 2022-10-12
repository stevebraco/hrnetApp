import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { GroupDropdownStyles } from './GroupDropdownStyles';

const GroupDropdown = ({ name, options, onChange, value }) => {
  return (
    <GroupDropdownStyles>
      <label htmlFor="name">{name}</label>
      <Dropdown id="name" options={options} onChange={onChange} value={value} />
    </GroupDropdownStyles>
  );
};

export default GroupDropdown;
