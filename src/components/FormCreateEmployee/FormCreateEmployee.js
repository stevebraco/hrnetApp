import React, { useEffect, useState } from 'react';
import GroupInput from '../GroupInput/GroupInput';

import {
  Container,
  Title,
  WrapperAddress,
  WrapperInput,
} from './FormCreateEmployeeStyles';
import { states } from '../../data/dataState';
import { department } from '../../data/dataDepartment';
import { changeNameKeys } from '../../utils/helpers';
import GroupInputDatePicker from '../GroupInputDatePicker/GroupInputDatePicker';
import GroupDropdown from '../GroupDropdown/GroupDropdown';
import OpenModal from '../Modal/Modal';

const FormCreateEmployee = () => {
  const newStates = changeNameKeys(states);
  const newDepartments = changeNameKeys(department);
  const [startDate, setStartDate] = useState(null);
  const [birth, setBirth] = useState(null);
  const [selectedState, setSelectedState] = useState(newStates[0].value);
  const [selectedDepartments, setSelectedDepartments] = useState(
    newDepartments[0].label
  );

  const [listEmployees, setListEmployees] = useState(
    JSON.parse(localStorage.getItem('listEmployees')) ?? []
  );

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const _onSelect = (option) => {
    console.log(option);
    setSelectedState(option.value);
  };

  const _onSelectDep = (option) => {
    setSelectedDepartments(option.label);
  };

  useEffect(() => {
    localStorage.setItem('listEmployees', JSON.stringify(listEmployees));
  }, [listEmployees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [firstName, lastName, dateOfBirth, startDate, street, city, zipcode] =
      e.target;

    const newEmployee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      street: street.value,
      city: city.value,
      state: selectedState,
      zipCode: zipcode.value,
      department: selectedDepartments,
    };

    setListEmployees((prevListEmployees) => [
      ...prevListEmployees,
      newEmployee,
    ]);
    openModal();
  };

  return (
    <Container>
      <Title>Create Employee</Title>

      <form onSubmit={handleSubmit}>
        <WrapperInput>
          <GroupInput inputName="First Name" />
          <GroupInput inputName="Last Name" />
        </WrapperInput>
        <WrapperInput>
          <GroupInputDatePicker
            inputName="Birth"
            state={birth}
            setState={setBirth}
          />
          <GroupInputDatePicker
            inputName="Start Date"
            state={startDate}
            setState={setStartDate}
          />
        </WrapperInput>
        <WrapperAddress>
          <h2>Address</h2>
          <GroupInput inputName="Street" />
          <GroupInput inputName="City" />
          <GroupDropdown
            name="State"
            options={newStates}
            onChange={_onSelect}
            value={selectedState}
          />

          <GroupInput typeNumber inputName="Zip Code" />
        </WrapperAddress>
        <WrapperAddress>
          <GroupDropdown
            name="Department"
            options={newDepartments}
            onChange={_onSelectDep}
            value={selectedDepartments}
          />
        </WrapperAddress>

        <button>Save</button>
      </form>
      <OpenModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </Container>
  );
};

export default FormCreateEmployee;
