import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statusColor } from '../GlobalStyle';
import QuantityMarker from '../QuantityMarker';

import { Container, Content, Label } from './styles';

const ActivitiesResume = ({ activities, loading }) => {
  const delayed = activities.find(activity => activity.status === 'delayed');
  const current = activities.find(activity => activity.status === 'current');
  const expected = activities.find(activity => activity.status === 'expected');
  const done = activities.find(activity => activity.status === 'done');

  const delayedQuantity = delayed ? delayed.annotations.length : 0;
  const currentQuantity = current ? current.annotations.length : 0;
  const expectedQuantity = expected ? expected.annotations.length : 0;
  const doneQuantity = delayed ? done.annotations.length : 0;

  const total =
    delayedQuantity + currentQuantity + expectedQuantity + doneQuantity;

  return (
    <Container>
      <Content>
        <QuantityMarker color={statusColor['default']}>{total}</QuantityMarker>
        <Label hasBgcolor>Total</Label>
      </Content>
      <Content>
        <QuantityMarker color={statusColor['delayed']}>
          {delayedQuantity}
        </QuantityMarker>
        <Label>Atradas</Label>
      </Content>
      <Content>
        <QuantityMarker color={statusColor['current']}>
          {currentQuantity}
        </QuantityMarker>
        <Label>Andamento</Label>
      </Content>
      <Content>
        <QuantityMarker color={statusColor['expected']}>
          {expectedQuantity}
        </QuantityMarker>
        <Label>Previstas</Label>
      </Content>
      <Content>
        <QuantityMarker color={statusColor['done']}>
          {doneQuantity}
        </QuantityMarker>
        <Label>Concluídas</Label>
      </Content>
    </Container>
  );
};

ActivitiesResume.propTypes = {
  activities: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    annotations: PropTypes.arrayOf({
      id: PropTypes.number,
      type: PropTypes.string,
      responsable: PropTypes.string,
      statusColor: PropTypes.string,
    }),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activity.data,
  loading: state.activity.loading,
});

export default connect(mapStateToProps)(ActivitiesResume);
