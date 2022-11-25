import styled from 'styled-components';
import { theme } from '../../themes';

export const Select = styled.select`
  background: ${theme.colors.bgPrimaryColor};
  color: ${theme.colors.txtColor};
  border: 1px solid #252525;
  border-radius: 5px;
  padding: 5px;
  margin: 0px 5px;
`;
