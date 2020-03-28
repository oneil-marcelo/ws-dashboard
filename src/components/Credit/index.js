import React from 'react';

import { Container, Title } from '../Card';
import { color } from '../GlobalStyle';

import { Content, Amount, Description } from './styles';

const Credit = () => {
  return (
    <Container>
      <Title>Limite de Crédito</Title>
      <Content>
        <Amount color={color.blue}>R$ 12.000,20</Amount>
        <Description>Concedido</Description>
      </Content>
      <Content>
        <Amount color={color.green}>R$ 3.105,00</Amount>
        <Description>Disponível</Description>
      </Content>
    </Container>
  );
};

export default Credit;
