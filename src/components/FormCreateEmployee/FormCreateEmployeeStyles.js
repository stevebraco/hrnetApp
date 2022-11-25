import styled from 'styled-components';
import { theme } from '../../themes';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-size: 45px;
  padding: 20px;
`;

export const WrapperInput = styled.div`
  border: 1px solid #252525;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  margin-bottom: 10px;
  gap: 25px;
  border-radius: 10px;
  ${theme.medias.tablet} {
    flex-direction: column;
  }
`;

export const WrapperAddress = styled.div`
  color: #${theme.colors.txtColor};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #252525;
`;

export const ButtonForm = styled.button`
  background: rgb(246, 188, 36);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}


`;
