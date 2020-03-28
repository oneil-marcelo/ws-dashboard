import React from 'react';
import { MdSearch } from 'react-icons/md';

import Information from '../../components/Information';
import Place from '../../components/Place';
import Opportunity from '../../components/Opportunity';
import Credit from '../../components/Credit';
import Sales from '../../components/Sales';
import Financial from '../../components/Financial';
import { Container as Content, Title } from '../../components/Card';
import ActivitiesResume from '../../components/ActivitiesResume';
import Timeline from '../../components/Timeline';

import { Container, Resume, Row, Activities, Form, Input } from './styles';

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
      <Activities>
        <Content>
          <Title>Atividades</Title>
          <Form>
            <MdSearch size={26} />
            <Input type="text" />
          </Form>
          <ActivitiesResume />
          <Timeline />
        </Content>
      </Activities>
    </Container>
  );
};

export default Main;
