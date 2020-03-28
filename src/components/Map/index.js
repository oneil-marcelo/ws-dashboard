import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';

import { color } from '../GlobalStyle';

const Map = ({ latitude, longitude }) => {
  return (
    <MapGL
      width="100%"
      height="100%"
      latitude={-23.5439948}
      longitude={-46.6065452}
      zoom={14}
      mapStyle="mapbox://styles/mapbox/basic-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
    >
      <Marker latitude={latitude} longitude={longitude}>
        <MdPlace size={22} color={color.red} />
      </Marker>
    </MapGL>
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Map;
