import styled from 'styled-components';
import theme from '../../utils/theme';

export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavStyles = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: ${theme.color.secondary};
  }
`;
