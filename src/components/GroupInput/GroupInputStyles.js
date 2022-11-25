import styled from 'styled-components';
import { theme } from '../../themes';

export const ContainerGroupStyles = styled.div`
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  padding-bottom: 8px;
  color: ${theme.colors.txtColor};
`;

export const Input = styled.input`
  width: 100%;
  background: ${theme.colors.bgPrimaryColor};
  color: white;
  border: none;
  outline: none;
  padding: 10px;
  font-family: Poppins, sans-serif;
  border-radius: 8px;
`;
