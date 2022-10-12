import styled from 'styled-components';

const ButtonStyles = styled.button`
  background: ${(props) => (props.primary ? 'white' : 'black')};
  color: ${(props) => (!props.primary ? 'white' : 'black')};
  border: 1px solid #e5e5e5;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;

  &:disabled {
    background: transparent;
    color: transparent;
    transition: 0.5s;
  }
`;

export default ButtonStyles;
