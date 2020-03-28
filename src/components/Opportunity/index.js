import React from 'react';
import { MdInfo } from 'react-icons/md';

import { Container, Title } from '../Card';
import { color } from '../GlobalStyle';
import QuantityMarker from '../QuantityMarker';

import {
  Header,
  Contents,
  Content,
  TextContainer,
  Name,
  Description,
  Nav,
} from './styles';

const Opportunity = () => {
  return (
    <Container>
      <Header>
        <Title>Oportunidades (7)</Title>
        <MdInfo size={26} color={color.gray} />
      </Header>
      <Contents>
        <Content>
          <QuantityMarker color={color.green}>4</QuantityMarker>
          <TextContainer>
            <Name>Ganhas</Name>
            <Description>R$ 20.000,00</Description>
          </TextContainer>
        </Content>
        <Content>
          <QuantityMarker color={color.red}>1</QuantityMarker>
          <TextContainer>
            <Name>Perdida</Name>
            <Description>R$ 4.300,00</Description>
          </TextContainer>
        </Content>
        <Content>
          <QuantityMarker color={color.blue}>2</QuantityMarker>
          <TextContainer>
            <Name>Abertas</Name>
            <Description>Diversas</Description>
          </TextContainer>
        </Content>
        <Content>
          <QuantityMarker color={color.gray}>0</QuantityMarker>
          <TextContainer>
            <Name>Descartadas</Name>
            <Description>-</Description>
          </TextContainer>
        </Content>
      </Contents>
      <Nav to="/" color={color.blue}>
        VER TODAS AS OPORTUNIDADES
      </Nav>
    </Container>
  );
};

export default Opportunity;
