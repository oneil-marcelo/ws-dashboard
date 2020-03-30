import React from 'react';
import { MdInfo } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Title } from '../Card';
import { color, statusColor } from '../GlobalStyle';
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

const Opportunity = ({ opportunities, loading }) => {
  const total = opportunities.reduce((t, o) => t + o.quantity, 0);

  return (
    <Container>
      <Header>
        <Title>Oportunidades ({total})</Title>
        <MdInfo size={26} color={color.gray} />
      </Header>
      <Contents>
        {opportunities.map(opportunity => (
          <Content key={opportunity.id}>
            <QuantityMarker color={statusColor[opportunity.status]}>
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

Opportunity.propTypes = {
  opportunities: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.int,
    description: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  opportunities: state.opportunity.data,
  loading: state.opportunity.loading,
});

export default connect(mapStateToProps)(Opportunity);
