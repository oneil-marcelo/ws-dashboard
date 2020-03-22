import React from 'react';

import Information from '../../components/Information';

import { Container, Resume, Timeline } from './styles';

const Main = () => {
  return (
    <Container>
      <Resume>
        <Information title="Informações gerais" />
        <Information title="Local" />
        <Information title="Oportunidades (7)" />
        <Information title="Informações gerais" />
        <Information title="Local" />
        <Information title="Oportunidades (7)" />
      </Resume>
      <Timeline>Resumo</Timeline>
    </Container>
  );
};

export default Main;
