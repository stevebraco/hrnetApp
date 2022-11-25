import React from 'react';
import GroupInput from '../GroupInput/GroupInput';

import {
  Container,
  Title,
  WrapperAddress,
  WrapperInput,
  ButtonForm,
} from './FormCreateEmployeeStyles';
import GroupInputDatePicker from '../GroupInputDatePicker/GroupInputDatePicker';
import GroupDropdown from '../GroupDropdown/GroupDropdown';
import { Modal } from 'steve-modal';
import { theme } from '../../themes';
import { useGlobalContext } from '../../context/globalContext';

const FormCreateEmployee = () => {
  const {
    newStates,
    selectedState,
    onSelectState,
    newDepartments,
    selectedDepartments,
    onSelectDepartement,
    birth,
    onSelectBirth,
    startDate,
    onSelectDate,
    handleSubmit,
    isOpenModal,
    closeModal,
  } = useGlobalContext();

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
            setState={onSelectBirth}
          />
          <GroupInputDatePicker
            inputName="Start Date"
            state={startDate}
            setState={onSelectDate}
          />
        </WrapperInput>
        <WrapperAddress>
          <h2>Address</h2>
          <GroupInput inputName="Street" />
          <GroupInput inputName="City" />
          <GroupDropdown
            name="State"
            options={newStates}
            onChange={onSelectState}
            value={selectedState}
          />

          <GroupInput typeNumber inputName="Zip Code" />
        </WrapperAddress>
        <WrapperAddress>
          <GroupDropdown
            name="Department"
            options={newDepartments}
            onChange={onSelectDepartement}
            value={selectedDepartments}
          />
        </WrapperAddress>
        <ButtonForm>Save</ButtonForm>
      </form>
      <Modal
        width="500px"
        height="200px"
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        backgroundModal={theme.colors.bgPrimaryColor}
      >
        <p>Employee Created!</p>
      </Modal>
    </Container>
  );
};

export default FormCreateEmployee;
