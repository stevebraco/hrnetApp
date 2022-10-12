import React from 'react';

const ShowPage = ({
  currentPage,
  columnPage,
  search,
  listEmployees,
  listEmployeesPerPage,
}) => {
  return (
    <div>
      showing {currentPage} to {columnPage} of
      {search ? listEmployeesPerPage.flat().length : listEmployees.length}
      {search && <p>filtered from {listEmployees.length} total entries</p>}
    </div>
  );
};

export default ShowPage;
