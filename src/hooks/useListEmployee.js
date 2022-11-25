import { useState } from 'react';
import { paginate } from '../utils/paginate';
import { filterEmployees } from '../utils/table';
import { useGlobalContext } from '../context/globalContext';

const useListEmployee = () => {
  const { listEmployees: employees } = useGlobalContext();

  const [showPageEntries, setShowPageEntries] = useState(10);
  const listEmployees = [...employees].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const arrayPaginate = paginate(listEmployees, showPageEntries);
  const [listEmployeesPerPage, setListEmployeesPerPage] =
    useState(arrayPaginate);
  const [search, setSearch] = useState('');
  const [isSort, setIsSort] = useState({
    header: 'firstName',
    descending: false,
  });

  const [pages, setPages] = useState({
    numberOfPage: 0,
    currentPage: 1,
    columnPage: showPageEntries,
  });

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
    let copyList = [...listEmployeesPerPage].flat();

    const listEmployeeSort = copyList.sort((a, b) => {
      return descending
        ? b[header].localeCompare(a[header])
        : a[header].localeCompare(b[header]);
    });

    setPages({
      numberOfPage: 0,
      currentPage: 1,
      columnPage: showPageEntries,
    });

    setListEmployeesPerPage(paginate(listEmployeeSort, showPageEntries));
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

  const handleSelected = () => {
    return isSort.header;
  };

  return {
    handleSelected,
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
  };
};

export default useListEmployee;
