import styled from 'styled-components';

export const Container = styled.div`
  height: 690px;
  margin-top: 25px;
  display: inline-block;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Bullet = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const SectionTitle = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

export const ActivityList = styled.ul`
  margin-left: 11px;
  padding-left: 25px;
  list-style: none;
  border-left: 2px solid #b7b7b7;
`;

export const ActivityItem = styled.li`
  margin: 15px 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;

  svg {
    fill: ${props => props.color};
  }
`;

export const ContainerText = styled.div`
  height: 60px;
  margin-left: 15px;
`;

export const Name = styled.p`
  font-size: 16px;
`;

export const Responsable = styled.p`
  font-size: 14px;
  color: #494949;
`;

export const Status = styled.p`
  font-size: 14px;
  color: #424242;
`;
