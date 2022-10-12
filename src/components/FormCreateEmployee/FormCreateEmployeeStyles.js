import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 45px;
  color: ${theme.color.secondary};
  padding: 20px;
`;

export const WrapperInput = styled.div`
  background: ${theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;
  gap: 25px;
  border-radius: 10px;
  height: 100px;
  box-shadow: 7px 7px 14px #bdbdbd, -7px -7px 14px #ffffff;
`;

export const WrapperAddress = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 7px 7px 14px #bdbdbd, -7px -7px 14px #ffffff;
`;
