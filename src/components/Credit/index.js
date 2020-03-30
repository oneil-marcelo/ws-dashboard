import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Title } from '../Card';
import { color } from '../GlobalStyle';
import Loading from '../Loading';

import { Content, Amount, Description } from './styles';

const Credit = ({ credit, loading }) => {
  if (loading) return <Loading>carregando...</Loading>;

  return (
    <Container>
      <Title>Limite de Crédito</Title>
      <Content>
        <Amount color={color.blue}>R$ {credit.granted}</Amount>
        <Description>Concedido</Description>
      </Content>
      <Content>
        <Amount color={color.green}>R$ {credit.available}</Amount>
        <Description>Disponível</Description>
      </Content>
    </Container>
  );
};

Credit.propTypes = {
  credit: PropTypes.shape({
    granted: PropTypes.string,
    available: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  credit: state.credit.data,
  loading: state.credit.loading,
});

export default connect(mapStateToProps)(Credit);
