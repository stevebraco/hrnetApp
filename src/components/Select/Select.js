import React from 'react';
import { showEntries } from '../../utils/paginate';
import { Select as SelectStyles } from './SelectStyles';

const Select = ({ handleChange, showPageEntries }) => {
  return (
    <div>
      Show
      <SelectStyles
        name="showEntries"
        onChange={handleChange}
        value={parseInt(showPageEntries)}
      >
        {showEntries.map((entries) => (
          <option key={entries} value={parseInt(entries)}>
            {entries}
          </option>
        ))}
      </SelectStyles>
      entries
    </div>
  );
};

export default Select;
