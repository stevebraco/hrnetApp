import React from 'react';
import styled from 'styled-components';
import { headers } from '../../utils/table';
import { THeadStyles } from './TableHeaderStyles';

const Th = styled.th`
  color: white;
  text-transform: capitalize;
`;

const TableHeader = ({ handleSort }) => {
  return (
    <THeadStyles>
      <tr>
        {headers.map((header) => (
          <Th onClick={handleSort(header)} key={header}>
            {header.replace(/([A-Z])/g, ' $1').trim()}
          </Th>
        ))}
      </tr>
    </THeadStyles>
  );
};

export default TableHeader;
