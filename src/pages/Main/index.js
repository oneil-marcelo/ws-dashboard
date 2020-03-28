import React from 'react';

import Information from '../../components/Information';
import Place from '../../components/Place';
import Opportunity from '../../components/Opportunity';

import { Container, Resume, Row, Timeline } from './styles';

const Main = () => {
  return (
    <Container>
      <Resume>
        <Row>
          <Information title="Informações gerais" />
          <Place title="Local" />
        </Row>
        <Row>
          <Opportunity title="Oportunidades" />
          <Information title="Informações gerais" />
        </Row>
        <Row>
          <Information title="Local" />
          <Information title="Oportunidades (7)" />
        </Row>
      </Resume>
      <Timeline>Resumo</Timeline>
    </Container>
  );
};

export default Main;
