import React from 'react';
import { showEntries } from '../../utils/paginate';

const Select = ({ handleChange, showPageEntries }) => {
  return (
    <div>
      Show
      <select
        name="showEntries"
        onChange={handleChange}
        value={parseInt(showPageEntries)}
      >
        {showEntries.map((entries) => (
          <option key={entries} value={parseInt(entries)}>
            {entries}
          </option>
        ))}
      </select>
      entries
    </div>
  );
};

export default Select;
