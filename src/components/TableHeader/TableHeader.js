/* eslint-disable indent */
import React from 'react';
import { headers } from '../../utils/table';
import { Icons, Th, THeadStyles, WrapperTh } from './TableHeaderStyles';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const TableHeader = ({ handleSort, handleSelected, isSort }) => {
  return (
    <THeadStyles>
      <tr>
        {headers.map((header) => {
          const isSelected = handleSelected() === header;
          const isDescending = isSort.descending && handleSelected() === header;
          return (
            <Th
              isSelected={isSelected}
              onClick={handleSort(header)}
              key={header}
            >
              <WrapperTh>
                {header.replace(/([A-Z])/g, ' $1').trim()}
                <Icons isSelected={isSelected} isDescending={isDescending}>
                  <IoMdArrowDropup className="iconUp" />
                  <IoMdArrowDropdown className="iconDown" />
                </Icons>
              </WrapperTh>
            </Th>
          );
        })}
      </tr>
    </THeadStyles>
  );
};

export default TableHeader;
