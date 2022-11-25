import {
  CHANGE_BIRTH,
  CHANGE_DATE,
  CHANGE_DEPARTEMENT,
  CHANGE_STATE,
  CLOSE_MODAL,
  HANDLE_SUBMIT,
  OPEN_MODAL,
} from '../contants/globalConstans';

/* eslint-disable indent */
const globalReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      return { ...state, selectedState: action.payload };

    case CHANGE_DEPARTEMENT:
      return { ...state, selectedDepartments: action.payload };

    case CHANGE_BIRTH:
      return { ...state, birth: action.payload };

    case CHANGE_DATE:
      return { ...state, startDate: action.payload };

    case HANDLE_SUBMIT: {
      const { selectedState, selectedDepartments, listEmployees } = state;
      const newEmployees = {
        ...action.payload,
        state: selectedState,
        department: selectedDepartments,
      };

      return { ...state, listEmployees: [...listEmployees, newEmployees] };
    }

    case OPEN_MODAL:
      return { ...state, isOpenModal: action.payload };

    case CLOSE_MODAL:
      return { ...state, isOpenModal: action.payload };

    default:
      return { ...state };
  }
};

export default globalReducer;
