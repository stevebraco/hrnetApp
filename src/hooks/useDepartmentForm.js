import { useState } from 'react';
import { changeNameKeys } from '../utils/helpers';
import { department } from '../data/dataDepartment';

const useDepartmentForm = () => {
  const newDepartments = changeNameKeys(department);

  const [selectedDepartments, setSelectedDepartments] = useState(
    newDepartments[0].label
  );

  const onSelectDep = (option) => {
    setSelectedDepartments(option.label);
  };

  return {
    selectedDepartments,
    onSelectDep,
    newDepartments,
  };
};

export default useDepartmentForm;
