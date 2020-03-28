import React from 'react';
import { MdPhone } from 'react-icons/md';

import {
  Container,
  Section,
  ActivityList,
  ActivityItem,
  ContainerText,
  Name,
  Responsable,
  Status,
} from './styles';

const Timeline = () => {
  return (
    <Container>
      <Section>
        <ActivityList>
          <ActivityItem>
            <MdPhone size={35} />
            <ContainerText>
              <Name>Ligação de agendamento de reunião</Name>
              <Responsable>Erica Collins</Responsable>
              <Status>Em atraso por 4 dias</Status>
            </ContainerText>
          </ActivityItem>
        </ActivityList>
      </Section>
    </Container>
  );
};

export default Timeline;
