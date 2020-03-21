import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`;

export const Content = styled.div`
  margin-top: 20px;
  background: #fff;

  &:not(:first-of-type) {
    margin-left: 15px;
  }
`;
