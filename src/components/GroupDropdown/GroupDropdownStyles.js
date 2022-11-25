import styled from 'styled-components';
import { theme } from '../../themes';

export const GroupDropdownStyles = styled.div`
  margin-bottom: 10px;

  .Dropdown-control {
    width: 100%;
    background: ${theme.colors.bgPrimaryColor};
    color: white;
    border: none;
    outline: none;
    padding: 10px;
    font-family: Poppins, sans-serif;
    border-radius: 8px;
  }
  .Dropdown-menu {
    border-radius: 8px;
    background: ${theme.colors.bgPrimaryColor};
  }
  .Dropdown-option {
    color: ${theme.colors.txtColor};

    &:hover {
      background: rgb(246, 188, 36, 0.3);
    }
  }
  .Dropdown-option.is-selected {
    background: rgb(246, 188, 36);
    color: ${theme.colors.txtColor};
  }
`;
