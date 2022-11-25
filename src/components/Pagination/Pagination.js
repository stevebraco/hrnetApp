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
        );
      })}
      <Button
        navigation
        nameButton="next"
        handleClick={handleNextPage}
        numberOfPage={numberOfPage}
        isDisabled={numberOfPage >= listEmployeesPerPage.length - 1}
      />
    </div>
  );
};

export default Pagination;
