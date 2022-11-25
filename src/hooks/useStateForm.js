import { useState } from 'react';
import { changeNameKeys } from '../utils/helpers';
import { states } from '../data/dataState';

const useStateForm = () => {
  const newStates = changeNameKeys(states);

  const [selectedState, setSelectedState] = useState(newStates[0].value);

  const onSelect = (option) => {
    setSelectedState(option.value);
  };

  return {
    selectedState,
    newStates,
    onSelect,
  };
};

export default useStateForm;
