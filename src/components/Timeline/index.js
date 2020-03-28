import React, { useState } from 'react';
import { MdPhone, MdMail, MdPeople } from 'react-icons/md';

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
};

const Timeline = () => {
  const agenda = [
    {
      id: 1,
      group: 'delayer',
      color: '#c62828',
      annotations: [
        {
          id: 10,
          type: 'phone',
          description: 'Ligação de agendamento da reunião',
          responsable: 'Érica Collins',
          status: 'Em atraso por 4 dias',
        },
      ],
    },
    {
      id: 2,
      group: 'delayed',
      color: '#F9A825',
      annotations: [
        {
          id: 11,
          type: 'people',
          description: 'Ligação de agendamento da reunião',
          responsable: 'Érica Collins',
          status: 'Em atraso por 4 dias',
        },
        {
          id: 12,
          type: 'mail',
          description: 'Ligação de agendamento da reunião',
          responsable: 'Érica Collins',
          status: 'Em atraso por 4 dias',
        },
      ],
    },
  ];
  const [activities] = useState(agenda);
  return (
    <Container>
      {activities.map(activity => (
        <Section key={activity.id}>
          <Header>
            <Bullet color={activity.color} />
            <SectionTitle>Atividades em atraso</SectionTitle>
          </Header>
          <ActivityList>
            {activity.annotations.map(annotation => (
              <ActivityItem key={annotation.id} color={activity.color}>
                {Icon[annotation.type]}
                <ContainerText>
                  <Name>Ligação de agendamento de reunião</Name>
                  <Responsable>Erica Collins</Responsable>
                  <Status>Em atraso por 4 dias</Status>
                </ContainerText>
              </ActivityItem>
            ))}
          </ActivityList>
        </Section>
      ))}
    </Container>
  );
};

export default Timeline;
