import styled from 'styled-components';

import { color } from '../GlobalStyle';

export const Personal = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 50%;
  background: #bdbdbd;

  svg {
    fill: #fff;
  }
`;

export const UserInfo = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 18px;
  color: ${color.gray};
`;

export const Enterprise = styled.p`
  font-size: 16px;
  color: ${color.gray};
`;

export const Tag = styled.span`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  background: #c8e6c9;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const ContactWrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  svg {
    fill: ${color.gray};
  }
`;

export const ContactInfo = styled.p`
  font-size: 16px;
  color: #424242;
`;

export const SocialMedia = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MediaLink = styled.a`
  color: ${color.gray};
  opacity: ${props => (props.href ? 1 : 0.5)};

  svg {
    margin-left: 8px;
  }
`;
