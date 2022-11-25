import React from 'react';
import styled from 'styled-components';
import { headers } from '../../utils/table';
import { THeadStyles } from './TableHeaderStyles';

const Th = styled.th`
  color: ${(props) => (props.isSelected ? '#8e8e8e' : '#ffffff')};
  text-transform: capitalize;
`;

const TableHeader = ({ handleSort, handleSelected }) => {
  return (
    <THeadStyles>
      <tr>
        {headers.map((header) => {
          const isSelected = handleSelected() === header;
          return (
            <Th
              isSelected={isSelected}
              onClick={handleSort(header)}
              key={header}
            >
              {header.replace(/([A-Z])/g, ' $1').trim()}
            </Th>
          );
        })}
      </tr>
    </THeadStyles>
  );
};

export default TableHeader;
