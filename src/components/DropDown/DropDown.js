import React, { useState } from 'react';
import { List, WrapperDropDown } from './DropDownStyles';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const DropDown = ({ data, isDropDownOpen, dropDownFalse, dropDownToggle }) => {
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [valueState, setValueState] = useState(data[0].name);

  const handleChooseState = (name) => () => {
    setValueState(name);
    // setIsDropDownOpen(false);
    dropDownFalse();
  };

  const handleDropDown = () => {
    // setIsDropDownOpen((prevState) => !prevState);
    dropDownToggle();
  };

  return (
    <div>
      <WrapperDropDown onClick={handleDropDown}>
        <input
          style={{ border: 'none' }}
          type="text"
          value={valueState}
          readOnly
        />
        {isDropDownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </WrapperDropDown>
      {isDropDownOpen && (
        <List>
          {data.map(({ name, abbreviation }) => (
            <li onClick={handleChooseState(name)} key={abbreviation}>
              {name}
            </li>
          ))}
        </List>
      )}
    </div>
  );
};

export default DropDown;
