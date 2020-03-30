import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MdPhone, MdMail, MdPeople, MdAssignmentLate } from 'react-icons/md';

import { statusColor } from '../GlobalStyle';
import Loading from '../Loading';

import {
  Container,
  Section,
  Header,
  Bullet,
  SectionTitle,
  ActivityList,
  ActivityItem,
  ContainerText,
  Name,
  Responsable,
  Status,
} from './styles';

const Icon = {
  phone: <MdPhone size={20} />,
  mail: <MdMail size={20} />,
  people: <MdPeople size={20} />,
  agenda: <MdAssignmentLate size={20} />,
};

const Timeline = ({ activities, loading }) => {
  if (loading) return <Loading>carregando...</Loading>;

  return (
    <Container>
      {activities.map(activity => (
        <Section key={activity.id}>
          <Header>
            <Bullet color={statusColor[activity.status]} />
            <SectionTitle>Atividades em atraso</SectionTitle>
          </Header>
          <ActivityList>
            {activity.annotations.map(annotation => (
              <ActivityItem
                key={annotation.id}
                color={statusColor[activity.status]}
              >
                {Icon[annotation.type]}
                <ContainerText>
                  <Name>{annotation.description}</Name>
                  <Responsable>{annotation.responsable}</Responsable>
                  <Status>{annotation.statusReport}</Status>
                </ContainerText>
              </ActivityItem>
            ))}
          </ActivityList>
        </Section>
      ))}
    </Container>
  );
};

Timeline.propTypes = {
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

export default connect(mapStateToProps)(Timeline);
