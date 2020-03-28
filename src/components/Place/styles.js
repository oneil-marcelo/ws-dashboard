import styled from 'styled-components';

export const Legend = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const TextContent = styled.div`
  margin-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    line-height: 20px;
    color: #595959;
  }
`;

export const Address = styled.p`
  font-size: 16px;
`;

export const AddressType = styled.p`
  font-size: 14px;
`;
