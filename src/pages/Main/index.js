import React from 'react';

import Information from '../../components/Information';
import Place from '../../components/Place';
import Opportunity from '../../components/Opportunity';
import Credit from '../../components/Credit';
import Sales from '../../components/Sales';
import Financial from '../../components/Financial';

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
          <Credit />
        </Row>
        <Row>
          <Sales />
          <Financial />
        </Row>
      </Resume>
      <Timeline>Resumo</Timeline>
    </Container>
  );
};

export default Main;
