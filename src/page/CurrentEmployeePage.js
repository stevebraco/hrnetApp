import React, { useState } from 'react';
import Select from '../components/Select/Select';
import Pagination from '../components/Pagination/Pagination';
import { paginate } from '../utils/paginate';
import { filterEmployees } from '../utils/table';
import ShowPage from '../components/ShowPage/ShowPage';
import Table from '../components/Table/Table';
import InputSearch from '../components/InputSearch/InputSearch';

const CurrentEmployeePage = () => {
  const [showPageEntries, setShowPageEntries] = useState(10);
  const listEmployees = JSON.parse(localStorage.getItem('listEmployees'));
  const arrayPaginate = paginate(listEmployees, showPageEntries);
  const [listEmployeesPerPage, setListEmployeesPerPage] =
    useState(arrayPaginate);
  const [search, setSearch] = useState('');
  const [isSort, setIsSort] = useState({
    header: null,
    descending: false,
  });

  const [pages, setPages] = useState({
    numberOfPage: 0,
    currentPage: 1,
    columnPage: showPageEntries,
  });

  const { numberOfPage, currentPage, columnPage } = pages;

  const handleNextPage = () => {
    setPages({
      columnPage: (pages.columnPage +=
        listEmployeesPerPage[pages.numberOfPage + 1].length),
      currentPage: (pages.currentPage += +showPageEntries),
      numberOfPage: pages.numberOfPage + 1,
    });
  };

  const handlePrevPage = () => {
    setPages({
      columnPage: (pages.columnPage +=
        listEmployeesPerPage[pages.numberOfPage - 1].length),
      currentPage: (pages.currentPage -= +showPageEntries),
      numberOfPage: pages.numberOfPage - 1,
    });
  };

  const handlePage = (idx) => {
    setPages({
      columnPage: listEmployeesPerPage
        .flat()
        .slice(0, `${idx + 1}` * showPageEntries).length,
      currentPage:
        listEmployeesPerPage.flat().slice(0, `${idx}` * showPageEntries)
          .length + 1,
      numberOfPage: idx,
    });
  };

  const handleSort = (header) => () => {
    setIsSort({ ...isSort, header });
    const descending = isSort.header === header && !isSort.descending;
    let copyList = [...listEmployeesPerPage];

    copyList[pages.numberOfPage].sort((a, b) => {
      return descending
        ? b[header].localeCompare(a[header])
        : a[header].localeCompare(b[header]);
    });

    setListEmployeesPerPage(copyList);
    setIsSort({ header, descending });
  };

  const handleChange = (e) => {
    setShowPageEntries(e.target.value);
    if (search) {
      setListEmployeesPerPage(
        paginate(listEmployeesPerPage.flat(), parseInt(e.target.value))
      );
    } else {
      setListEmployeesPerPage(
        paginate(listEmployees, parseInt(e.target.value))
      );
    }
    setPages({
      columnPage: listEmployeesPerPage.flat().slice(0, e.target.value).length,
      currentPage: 1,
      numberOfPage: 0,
    });
  };

  const employeesListFilter = filterEmployees(listEmployees, search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    //FIXME: setColumnPage('coucou');
    const filter = paginate(employeesListFilter, parseInt(showPageEntries));

    if (e.target.value) {
      setListEmployeesPerPage(
        paginate(
          filterEmployees(listEmployees, e.target.value),
          parseInt(showPageEntries)
        )
      );
    } else {
      setListEmployeesPerPage(arrayPaginate);
    }

    if (pages.numberOfPage + 1 > filter.length) {
      setPages({
        ...pages,
        numberOfPage: 0,
      });
    }
  };

  return (
    <div>
      <ShowPage
        currentPage={currentPage}
        columnPage={columnPage}
        search={search}
        listEmployees={listEmployees}
        listEmployeesPerPage={listEmployeesPerPage}
      />
      <Select handleChange={handleChange} showPageEntries={showPageEntries} />
      <Pagination
        numberOfPage={numberOfPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePage={handlePage}
        listEmployeesPerPage={listEmployeesPerPage}
      />
      <InputSearch search={search} handleSearch={handleSearch} />
      <Table
        listEmployeesPerPage={listEmployeesPerPage}
        numberOfPage={numberOfPage}
        handleSort={handleSort}
      />
    </div>
  );
};

export default CurrentEmployeePage;
