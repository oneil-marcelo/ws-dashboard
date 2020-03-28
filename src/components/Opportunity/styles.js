import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
`;
export const Bullet = styled.span`
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
export const TextContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #424242;
`;
export const Description = styled.p`
  font-size: 14px;
  color: #424242;
`;

export const Nav = styled(Link)`
  font-size: 15px;
  margin-top: 25px;
  text-decoration: none;
  color: ${props => props.color};
`;
