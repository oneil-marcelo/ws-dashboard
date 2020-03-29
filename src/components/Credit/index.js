import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from '../Card';
import { color } from '../GlobalStyle';

import { Content, Amount, Description } from './styles';

const Credit = ({ credit }) => {
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
};

export default Credit;
