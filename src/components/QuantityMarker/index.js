import styled from 'styled-components';

const QuantityMarker = styled.span`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  border-radius: 7px;
  background: ${props => props.color};
  z-index: 5;
`;

export default QuantityMarker;
