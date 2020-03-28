import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  position: relative;
  width: inherit;
  height: 35px;
  left: -15px;
  padding: 0 15px;
  border-radius: 7px;
  line-height: 35px;
  text-align: left;
  background: ${props => (props.hasBgcolor ? 'rgba(0, 0, 0, 0.1)' : 'none')};
`;
