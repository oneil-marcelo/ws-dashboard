import React from 'react';

import { Container, Title } from '../Card';
import QuantityMarker from '../QuantityMarker';
import { color } from '../GlobalStyle';

import { List, ListItem, TextContainer, Amount, Description } from './styles';

const Financial = () => {
  return (
    <Container>
      <Title>Títulos Financeiros</Title>
      <List>
        <ListItem>
          <QuantityMarker color={color.red}>1</QuantityMarker>
          <TextContainer>
            <Amount>R$ 3.105,00</Amount>
            <Description>Vencidos</Description>
          </TextContainer>
        </ListItem>
        <ListItem>
          <QuantityMarker color={color.yellow}>2</QuantityMarker>
          <TextContainer>
            <Amount>R$ 3.105,00</Amount>
            <Description>A vencer R$ 20.000,00</Description>
          </TextContainer>
        </ListItem>
        <ListItem>
          <QuantityMarker color={color.green}>2</QuantityMarker>
          <TextContainer>
            <Amount>R$ 3.105,00</Amount>
            <Description>Pagos</Description>
          </TextContainer>
        </ListItem>
      </List>
    </Container>
  );
};

export default Financial;
