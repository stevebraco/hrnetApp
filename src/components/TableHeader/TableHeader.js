/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import { headers } from '../../utils/table';
import { THeadStyles } from './TableHeaderStyles';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const Th = styled.th`
  color: ${({ isSelected }) => (isSelected ? '#f6bc24' : '#ffffff')};
  text-transform: capitalize;
`;

const Icons = styled.span`
  display: flex;
  flex-direction: column;

  .iconUp {
    color: ${({ isSelected, isDescending }) => {
      if (isSelected) {
        if (isDescending) {
          return '#ffffff';
        } else {
          return 'rgb(246, 188, 36)';
        }
      }
    }};
  }

  .iconDown {
    color: ${({ isSelected, isDescending }) => {
      if (isSelected) {
        if (isDescending) {
          return 'rgb(246, 188, 36)';
        } else {
          return '#ffffff';
        }
      }
    }};
  }
`;

const WrapperTh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

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
