import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`;

export const Resume = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

export const Timeline = styled.div`
  margin-top: 20px;
  margin-left: 15px;
`;
