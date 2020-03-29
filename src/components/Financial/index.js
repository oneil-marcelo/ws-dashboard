import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from '../Card';
import QuantityMarker from '../QuantityMarker';
import { statusColor } from '../GlobalStyle';

import { List, ListItem, TextContainer, Amount, Description } from './styles';

const Financial = ({ securities }) => {
  return (
    <Container>
      <Title>Títulos Financeiros</Title>
      <List>
        {securities.map(security => (
          <ListItem>
            <QuantityMarker color={statusColor[security.status]}>
              {security.quantity}
            </QuantityMarker>
            <TextContainer>
              <Amount>R$ {security.amount}</Amount>
              <Description>{security.description}</Description>
            </TextContainer>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Financial.propTypes = {
  securities: PropTypes.arrayOf({
    quantity: PropTypes.number,
    amount: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Financial;
