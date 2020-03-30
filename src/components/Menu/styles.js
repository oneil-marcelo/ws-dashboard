import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from '../GlobalStyle';

export const MenuList = styled.ul`
  width: ${props => props.config.width};
  height: ${props => props.config.height};
  padding: ${props => props.config.padding};
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background: #fafafa;
  transition: all 0.3s;
`;

export const MenuItem = styled.li`
  margin: 10px 0;
`;

// export const MenuLink = styled(Link)``;
export const MenuLink = styled(Link)`
  width: 25px;
  height: 25px;
  margin: 20px 0;
  background: none;

  &:hover {
    svg {
      fill: ${color.blue};
    }
  }

  svg {
    fill: ${color.gray};
    opacity: 0.6;
  }
`;
