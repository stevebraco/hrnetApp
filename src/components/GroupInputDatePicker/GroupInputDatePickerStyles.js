import styled from 'styled-components';
import { theme } from '../../themes';

const GroupInputDatePickerStyles = styled.div`
  width: 100%;
  input {
    width: 100%;
    background: ${theme.colors.bgPrimaryColor};
    color: white;
    border: none;
    outline: none;
    padding: 10px;
    font-family: Poppins, sans-serif;
    border-radius: 8px;
  }
`;

export default GroupInputDatePickerStyles;
