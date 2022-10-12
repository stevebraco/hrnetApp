import styled from 'styled-components';
import theme from '../../utils/theme';

export const ContainerGroupStyles = styled.div`
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 7px;
  background: ${theme.color.bgPrimary};
  width: 100%;
`;
