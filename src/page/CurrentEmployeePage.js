import React from 'react';
import Select from '../components/Select/Select';
import Pagination from '../components/Pagination/Pagination';
import ShowPage from '../components/ShowPage/ShowPage';
import Table from '../components/Table/Table';
import InputSearch from '../components/InputSearch/InputSearch';
import useListEmployee from '../hooks/useListEmployee';
import styled from 'styled-components';

const CurrentEmployeePage = () => {
  const {
    handleNextPage,
    handlePrevPage,
    handlePage,
    handleSort,
    handleChange,
    handleSearch,
    pages,
    search,
    listEmployees,
    listEmployeesPerPage,
    showPageEntries,
    handleSelected,
  } = useListEmployee();

  const { numberOfPage, currentPage, columnPage } = pages;

  return (
    <>
      <WrapperFlex>
        <Select handleChange={handleChange} showPageEntries={showPageEntries} />
        <InputSearch search={search} handleSearch={handleSearch} />
      </WrapperFlex>
      <WrapperTable>
        <Table
          listEmployeesPerPage={listEmployeesPerPage}
          numberOfPage={numberOfPage}
          handleSort={handleSort}
          handleSelected={handleSelected}
        />
      </WrapperTable>
      <WrapperFlex>
        <ShowPage
          currentPage={currentPage}
          columnPage={columnPage}
          search={search}
          listEmployees={listEmployees}
          listEmployeesPerPage={listEmployeesPerPage}
        />
        <Pagination
          numberOfPage={numberOfPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handlePage={handlePage}
          listEmployeesPerPage={listEmployeesPerPage}
        />
      </WrapperFlex>
    </>
  );
};

export default CurrentEmployeePage;

const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5px;
`;

const WrapperTable = styled.div`
  min-width: 900px;
  overflow-x: auto;
`;
