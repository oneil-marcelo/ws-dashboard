import styled from 'styled-components';

import { color } from '../GlobalStyle';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${color.blue};
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: none;
`;
