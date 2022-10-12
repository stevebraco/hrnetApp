import React from 'react';
import InputStyles from './InputSeachStyles';

const InputSearch = ({ search, handleSearch }) => {
  return <InputStyles type="text" value={search} onChange={handleSearch} />;
};

export default InputSearch;
