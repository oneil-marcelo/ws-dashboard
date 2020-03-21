import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from '../GlobalStyle';

export const MenuList = styled.ul`
  width: 70px;
  height: 100vh;
  padding: 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background: #fafafa;
`;

export const MenuItem = styled.li``;

// export const MenuLink = styled(Link)``;
export const MenuLink = styled(Link)`
  width: 25px;
  height: 25px;
  margin: 10px 0;
  background: none;

  &:hover {
    svg {
      fill: ${color.blue};
    }
  }

  svg {
    fill: ${color.gray};
  }
`;
