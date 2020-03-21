import React from 'react';
import { MdMenu } from 'react-icons/md';

import { Container, Button } from './styles';

const Header = () => {
  return (
    <Container>
      <Button>
        <MdMenu size={35} color="#FFF" />
      </Button>
    </Container>
  );
};

export default Header;
