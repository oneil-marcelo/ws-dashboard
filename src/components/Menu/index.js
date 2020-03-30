import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  MdSearch,
  MdPerson,
  MdAssignmentLate,
  MdPlace,
  MdPeople,
  MdPhone,
  MdMail,
  MdStorage,
  MdAddAPhoto,
} from 'react-icons/md';

import { MenuList, MenuItem, MenuLink } from './styles';

const Menu = ({ menu }) => {
  return (
    <MenuList config={menu}>
      <MenuItem>
        <MenuLink to="/pagina" alt="nome da página">
          <MdSearch size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdPerson size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdAssignmentLate size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdPhone size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdPlace size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdPeople size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdMail size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdStorage size={25} />
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          <MdAddAPhoto size={25} />
        </MenuLink>
      </MenuItem>
    </MenuList>
  );
};

Menu.propTypes = {
  menu: PropTypes.shape({
    isOpen: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(Menu);
