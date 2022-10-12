import React from 'react';
import Button from '../Button/Button';

const Pagination = ({
  numberOfPage,
  handleNextPage,
  handlePrevPage,
  handlePage,
  listEmployeesPerPage,
}) => {
  return (
    <div className="btn-container">
      <Button
        nameButton="prev"
        handleClick={handlePrevPage}
        numberOfPage={numberOfPage}
        isDisabled={numberOfPage <= 0}
      />
      {listEmployeesPerPage.map((_, index) => {
        return (
          <Button
            primary
            index={index}
            numberOfPage={numberOfPage}
            key={index}
            handleClick={() => handlePage(index)}
            nameButton={index + 1}
          />
          // <button
          //   key={index}
          //   className={`page-btn ${
          //     index === numberOfPage ? 'active-btn' : null
          //   }`}
          //   onClick={() => handlePage(index)}
          // >
          //   {index + 1}
          // </button>
        );
      })}
      <Button
        navigation
        nameButton="next"
        handleClick={handleNextPage}
        numberOfPage={numberOfPage}
        isDisabled={numberOfPage >= listEmployeesPerPage.length - 1}
      />
      {/* <button
        className="next-btn"
        disabled={numberOfPage >= listEmployeesPerPage.length - 1}
        onClick={handleNextPage}
      >
        next
      </button> */}
    </div>
  );
};

export default Pagination;
