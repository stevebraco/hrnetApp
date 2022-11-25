import React from 'react';
import { Label } from '../GroupInput/GroupInputStyles';
import InputStyles from './InputSeachStyles';

const InputSearch = ({ search, handleSearch }) => {
  return (
    <div>
      <Label htmlFor="search">Search : </Label>
      <InputStyles
        id="search"
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default InputSearch;
