import styled from 'styled-components';

import { color } from '../GlobalStyle';

export const Container = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: normal;
  color: ${color.gray};
  margin-bottom: 20px;
`;
