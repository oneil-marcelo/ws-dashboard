import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

const Loading = () => {
  return (
    <Container>
      <FaSpinner size={26} />
    </Container>
  );
};

export default Loading;
