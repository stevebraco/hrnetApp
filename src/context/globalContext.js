import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/globalReducer';
import { changeNameKeys } from '../utils/helpers';
import { states } from '../data/dataState';
import { department } from '../data/dataDepartment';
import {
  CHANGE_BIRTH,
  CHANGE_DATE,
  CHANGE_DEPARTEMENT,
  CHANGE_STATE,
  CLOSE_MODAL,
  HANDLE_SUBMIT,
  OPEN_MODAL,
} from '../contants/globalConstans';

const initialState = {
  newStates: changeNameKeys(states),
  selectedState: changeNameKeys(states)[0].value,
  newDepartments: changeNameKeys(department),
  selectedDepartments: changeNameKeys(department)[0].label,
  birth: null,
  startDate: null,
  listEmployees: JSON.parse(localStorage.getItem('listEmployees')) ?? [],
  isOpenModal: false,
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('listEmployees', JSON.stringify(state.listEmployees));
  }, [state.listEmployees]);

  const onSelectState = (option) => {
    dispatch({ type: CHANGE_STATE, payload: option.value });
  };

  const onSelectDepartement = (option) => {
    dispatch({ type: CHANGE_DEPARTEMENT, payload: option.label });
  };

  const onSelectBirth = (birth) => {
    dispatch({ type: CHANGE_BIRTH, payload: birth });
  };

  const onSelectDate = (date) => {
    dispatch({ type: CHANGE_DATE, payload: date });
  };

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
      zipCode: zipcode.value,
    };

    dispatch({ type: HANDLE_SUBMIT, payload: newEmployee });
    openModal();
    e.target.reset();
  };

  function openModal() {
    dispatch({ type: OPEN_MODAL, payload: true });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL, payload: false });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        onSelectState,
        onSelectDepartement,
        onSelectBirth,
        onSelectDate,
        handleSubmit,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
