import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Title } from '../Card';
import QuantityMarker from '../QuantityMarker';
import { statusColor } from '../GlobalStyle';
import Loading from '../Loading';

import { List, ListItem, TextContainer, Amount, Description } from './styles';

const Financial = ({ securities, loading }) => {
  if (loading) return <Loading>carregando...</Loading>;

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
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  securities: state.financial.data,
  loading: state.financial.loading,
});

export default connect(mapStateToProps)(Financial);
