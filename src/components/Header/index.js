import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdMenu } from 'react-icons/md';

import * as MenuActions from '../../store/modules/menu/actions';

import { Container, Button } from './styles';

const Header = ({ toggleMenu }) => {
  return (
    <Container>
      <Button onClick={() => toggleMenu()}>
        <MdMenu size={35} color="#FFF" />
      </Button>
    </Container>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

const mapActionsToProps = dispatch => bindActionCreators(MenuActions, dispatch);

export default connect(null, mapActionsToProps)(Header);
