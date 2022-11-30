/* eslint-disable indent */
import styled from 'styled-components';
import { theme } from '../../themes';

export const THeadStyles = styled.thead`
  height: 50px;
  background: ${theme.colors.bgPrimaryColor};
  cursor: pointer;
`;

export const Th = styled.th`
  color: ${({ isSelected }) => (isSelected ? '#f6bc24' : '#ffffff')};
  text-transform: capitalize;
`;

export const Icons = styled.span`
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

export const WrapperTh = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
