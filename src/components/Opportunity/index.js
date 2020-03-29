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

const Opportunity = ({ opportunities }) => {
  return (
    <Container>
      <Header>
        <Title>Oportunidades ({opportunities.length})</Title>
        <MdInfo size={26} color={color.gray} />
      </Header>
      <Contents>
        {opportunities.map(opportunity => (
          <Content>
            <QuantityMarker color={color.green}>
              {opportunity.quantity}
            </QuantityMarker>
            <TextContainer>
              <Name>{opportunity.name}</Name>
              <Description>{opportunity.description}</Description>
            </TextContainer>
          </Content>
        ))}
      </Contents>
      <Nav to="/" color={color.blue}>
        VER TODAS AS OPORTUNIDADES
      </Nav>
    </Container>
  );
};

export default Opportunity;
