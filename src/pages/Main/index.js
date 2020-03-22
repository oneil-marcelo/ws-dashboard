import React from 'react';

import Information from '../../components/Information';

import { Container, Content } from './styles';

const Main = () => {
  return (
    <Container>
      <Content>
        <Information title="Informações gerais" />
      </Content>
      <Content>Resumo</Content>
    </Container>
  );
};

export default Main;
