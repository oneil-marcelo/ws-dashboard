import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

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
import * as CustomerActions from '../../store/modules/customer/actions';

import { Container, Resume, Row, Activities, Form, Input } from './styles';

const Main = ({ getCustomerById }) => {
  getCustomerById(1);

  const [loading, setLoading] = useState(true);
  const getDataAsync = async () => {
    await api.get(`activity?customerId=${1}`);

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
          <Information />
          <Place />
        </Row>
        <Row>
          <Opportunity />
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

Main.propTypes = {
  getCustomerById: PropTypes.func.isRequired,
};

const MapActionsToProps = dispatch =>
  bindActionCreators(CustomerActions, dispatch);

export default connect(null, MapActionsToProps)(Main);
