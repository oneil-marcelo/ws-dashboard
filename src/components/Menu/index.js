import React from 'react';
import { MdSearch } from 'react-icons/md';

import { MenuList, MenuItem, MenuLink } from './styles';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink to="/pagina" alt="nome da página">
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
