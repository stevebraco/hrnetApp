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
      showing {currentPage} to {columnPage} of{' '}
      {search ? listEmployeesPerPage.flat().length : listEmployees.length}
      {search && (
        <span> (filtered from {listEmployees.length} total entries)</span>
      )}
    </div>
  );
};

export default ShowPage;
