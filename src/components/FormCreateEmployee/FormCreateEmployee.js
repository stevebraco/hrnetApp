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
import useForm from '../../hooks/useForm';
import useStateForm from '../../hooks/useStateForm';
import useDepartmentForm from '../../hooks/useDepartmentForm';

const FormCreateEmployee = () => {
  const { selectedState, newStates, onSelect } = useStateForm();
  const { selectedDepartments, onSelectDep, newDepartments } =
    useDepartmentForm();
  const {
    handleSubmit,
    startDate,
    setStartDate,
    birth,
    setBirth,
    modalIsOpen,
    closeModal,
  } = useForm(selectedState, selectedDepartments);

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
            onChange={onSelect}
            value={selectedState}
          />

          <GroupInput typeNumber inputName="Zip Code" />
        </WrapperAddress>
        <WrapperAddress>
          <GroupDropdown
            name="Department"
            options={newDepartments}
            onChange={onSelectDep}
            value={selectedDepartments}
          />
        </WrapperAddress>
        <ButtonForm>Save</ButtonForm>
      </form>
      <Modal
        width="500px"
        height="200px"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        backgroundModal={theme.colors.bgPrimaryColor}
      >
        <p>Employee Created!</p>
      </Modal>
    </Container>
  );
};

export default FormCreateEmployee;
