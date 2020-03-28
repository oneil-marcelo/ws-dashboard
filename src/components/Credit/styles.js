import styled from 'styled-components';

export const Content = styled.div`
  height: 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.div`
  font-size: 21px;
  font-weight: 500;
  color: ${props => props.color};
`;

export const Description = styled.div``;
