import styled from 'styled-components';
import { theme } from '../../themes';

const ButtonStyles = styled.button`
  background: ${(props) =>
    props.primary ? theme.colors.bgPrimaryColor : 'black'};
  color: ${(props) => (!props.primary ? 'white' : 'white')};
  border: 1px solid #252525;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    background: ${theme.colors.bgPrimaryColor};
  }

  &:disabled {
    background: transparent;
    color: transparent;
    transition: 0.5s;
  }
`;

export default ButtonStyles;
