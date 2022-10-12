import React from 'react';
import { headers } from '../../utils/table';

const TableBody = ({ listEmployeesPerPage, numberOfPage }) => {
  return (
    <tbody>
      {listEmployeesPerPage[numberOfPage] ? (
        listEmployeesPerPage[numberOfPage].map((location, index) => (
          <tr key={index}>
            {headers.map((header, idx) => (
              <td key={idx}>{location[header]}</td>
            ))}
          </tr>
        ))
      ) : (
        <tr style={{ textAlign: 'center' }}>
          <td colSpan="9">No matching records found</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
