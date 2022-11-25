import React from 'react';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';
import { TableStyles } from './TableStyles';

const Table = ({
  listEmployeesPerPage,
  numberOfPage,
  handleSort,
  handleSelected,
}) => {
  return (
    <TableStyles>
      <TableHeader handleSort={handleSort} handleSelected={handleSelected} />
      <TableBody
        listEmployeesPerPage={listEmployeesPerPage}
        numberOfPage={numberOfPage}
      />
    </TableStyles>
  );
};

export default Table;
