import React from 'react';
import PropTypes from 'prop-types';
import { MdPlace } from 'react-icons/md';
import { connect } from 'react-redux';

import { color } from '../GlobalStyle';
import Map from '../Map';
import { Container, Title } from '../Card';
import Loading from '../Loading';

import { Legend, TextContent, Address, AddressType } from './styles';

const Place = ({ customer, loading }) => {
  if (loading) return <Loading>carregando...</Loading>;
  return (
    <Container>
      <Title>Localização</Title>
      <div style={{ flex: 1 }}>
        <Map latitude={customer.latitude} longitude={customer.longitude} />
      </div>
      <Legend>
        <MdPlace size={22} color={color.gray} />
        <TextContent>
          <Address>{customer.address}</Address>
          <AddressType>{customer.addressType}</AddressType>
        </TextContent>
      </Legend>
    </Container>
  );
};

Place.propTypes = {
  customer: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    address: PropTypes.string,
    addressType: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const MapStateToProps = state => ({
  customer: state.customer.data,
  loading: state.customer.loading,
});

export default connect(MapStateToProps)(Place);
