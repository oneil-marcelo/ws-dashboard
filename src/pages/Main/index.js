import React, { useState, useEffect } from 'react';
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
import api from '../../services/api';

import { Container, Resume, Row, Activities, Form, Input } from './styles';

const Main = () => {
  const [customer, setCustomer] = useState({});
  const [opportunities, setOpportunities] = useState({});
  const [credit, setCredit] = useState({});
  const [loading, setLoading] = useState(true);
  const getDataAsync = async () => {
    const [
      customer,
      opportunity,
      credit,
      financial,
      activity,
    ] = await Promise.all([
      api.get(`customer/${1}`),
      api.get(`opportunity?customerId=${1}`),
      api.get(`credit?customerId=${1}`),
      api.get(`financial?customerId=${1}`),
      api.get(`activity?customerId=${1}`),
    ]);

    setCustomer(customer.data);
    setOpportunities(opportunity.data[0].resume);
    setCredit(credit.data[0]);
    setLoading(false);
  };
  useEffect(() => {
    getDataAsync();
  }, []);

  if (loading) return <h5>carregando...</h5>;

  return (
    <Container>
      <Resume>
        <Row>
          <Information customer={customer} />
          <Place customer={customer} />
        </Row>
        <Row>
          <Opportunity opportunities={opportunities} />
          <Credit credit={credit} />
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
