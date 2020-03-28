import React from 'react';

import { color } from '../GlobalStyle';
import QuantityMarker from '../QuantityMarker';

import { Container, Content, Label } from './styles';

const ActivitiesResume = () => {
  return (
    <Container>
      <Content>
        <QuantityMarker color={color.gray}>25</QuantityMarker>
        <Label hasBgcolor>Total</Label>
      </Content>
      <Content>
        <QuantityMarker color={color.red}>1</QuantityMarker>
        <Label>Atradas</Label>
      </Content>
      <Content>
        <QuantityMarker color={color.blue}>0</QuantityMarker>
        <Label>Andamento</Label>
      </Content>
      <Content>
        <QuantityMarker color={color.yellow}>3</QuantityMarker>
        <Label>Previstas</Label>
      </Content>
      <Content>
        <QuantityMarker color={color.green}>21</QuantityMarker>
        <Label>Concluídas</Label>
      </Content>
    </Container>
  );
};

export default ActivitiesResume;
