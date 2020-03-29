import React from 'react';
import PropTypes from 'prop-types';
import { MdPlace } from 'react-icons/md';

import { color } from '../GlobalStyle';
import Map from '../Map';
import { Container, Title } from '../Card';

import { Legend, TextContent, Address, AddressType } from './styles';

const Place = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div style={{ flex: 1 }}>
        <Map latitude={-23.5439948} longitude={-46.6065452} />
      </div>
      <Legend>
        <MdPlace size={22} color={color.gray} />
        <TextContent>
          <Address>Avenida Brasil, 4019</Address>
          <AddressType>Trabalho</AddressType>
        </TextContent>
      </Legend>
    </Container>
  );
};

Place.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Place;
