import { useEffect, useState } from 'react';

const useForm = (selectedState, selectedDepartments) => {
  const [listEmployees, setListEmployees] = useState(
    JSON.parse(localStorage.getItem('listEmployees')) ?? []
  );
  const [startDate, setStartDate] = useState(null);
  const [birth, setBirth] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('listEmployees', JSON.stringify(listEmployees));
  }, [listEmployees]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
    console.log(newEmployee);

    setListEmployees((prevListEmployees) => [
      ...prevListEmployees,
      newEmployee,
    ]);
    openModal();
  };
  return {
    listEmployees,
    handleSubmit,
    startDate,
    setStartDate,
    birth,
    setBirth,
    modalIsOpen,
    closeModal,
  };
};
export default useForm;
