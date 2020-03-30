import styled, { keyframes } from 'styled-components';
import { color } from '../GlobalStyle';

const rotate = keyframes`

 from: {
   transform: rotate(0deg)
 }
 to {
   transform: rotate(360deg)
 }
`;
export const Container = styled.div`
  min-height: 215px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${color.gray};
    animation: ${rotate} 0.8s linear infinite;
  }
`;
