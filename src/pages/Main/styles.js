import styled from 'styled-components';

import { color } from '../../components/GlobalStyle';

export const Container = styled.div`
  flex: 1;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`;

export const Resume = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  &:not(:first-of-type) {
    margin-top: 15px;
  }
`;

export const Activities = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 100%;
  height: 34px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #757575;
  border-radius: 3px;

  svg {
    fill: ${color.gray};
  }
`;

export const Input = styled.input.attrs({
  placeholder: 'Pesquisar...',
})`
  margin-left: 15px;
  flex: 1;
  border: 0;
  font-size: 14px;
  color: ${color.gray};

  &::placeholder {
    color: ${color.gray};
  }
`;
