import styled from 'styled-components';

const QuantityMarker = styled.span`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  border-radius: 7px;
  background: ${props => props.color};
`;

export default QuantityMarker;
