import styled from 'styled-components';
import { theme } from '../../themes';

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const NavStyles = styled.div`
  display: flex;
  gap: 15px;

  a {
    text-decoration: none;
    color: ${theme.colors.txtColor};

    &:hover {
      color: #e5e5e5;
    }
  }
`;
