import React from 'react';
import { MdInfo } from 'react-icons/md';

import { Container, Title } from '../Card';
import { color } from '../GlobalStyle';

import {
  Header,
  Contents,
  Content,
  Bullet,
  TextContainer,
  Name,
  Description,
  Nav,
} from './styles';

const Opportunity = ({ title }) => {
  return (
    <Container>
      <Header>
        <Title>{title} (7)</Title>
        <MdInfo size={26} color={color.gray} />
      </Header>
      <Contents>
        <Content>
          <Bullet color={color.green}>4</Bullet>
          <TextContainer>
            <Name>Ganhas</Name>
            <Description>R$ 20.000,00</Description>
          </TextContainer>
        </Content>
        <Content>
          <Bullet color={color.red}>1</Bullet>
          <TextContainer>
            <Name>Perdida</Name>
            <Description>R$ 4.300,00</Description>
          </TextContainer>
        </Content>
        <Content>
          <Bullet color={color.blue}>2</Bullet>
          <TextContainer>
            <Name>Abertas</Name>
            <Description>Diversas</Description>
          </TextContainer>
        </Content>
        <Content>
          <Bullet color={color.gray}>0</Bullet>
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
