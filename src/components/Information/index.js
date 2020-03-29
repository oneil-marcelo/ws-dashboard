import React from 'react';
import PropTypes from 'prop-types';
import { MdPerson, MdLocalPhone, MdMarkunread } from 'react-icons/md';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import { Container, Title } from '../Card';
import {
  Personal,
  Avatar,
  UserInfo,
  Name,
  Enterprise,
  Tag,
  Contact,
  ContactWrapInfo,
  ContactInfo,
  SocialMedia,
  MediaLink,
} from './styles';

const Information = ({ customer }) => {
  return (
    <Container>
      <Title>Informações gerais</Title>
      <Personal>
        <Avatar>
          <MdPerson size={58} />
        </Avatar>
        <UserInfo>
          <Name>{customer.name}</Name>
          <Enterprise>{customer.enterprise}</Enterprise>
          <Tag active={customer.active}>
            {customer.active ? 'Ativo' : 'Inativo'}
          </Tag>
        </UserInfo>
      </Personal>
      <Contact>
        <MdLocalPhone size={26} />
        <ContactWrapInfo>
          <ContactInfo>{customer.phone}</ContactInfo>
          <ContactInfo>{customer.phoneType}</ContactInfo>
        </ContactWrapInfo>
      </Contact>
      <Contact>
        <MdMarkunread size={26} />
        <ContactWrapInfo>
          <ContactInfo>{customer.email}</ContactInfo>
          <ContactInfo>{customer.emailType}</ContactInfo>
        </ContactWrapInfo>
      </Contact>
      <SocialMedia>
        <MediaLink href={`tel://${customer.socialMedia.whatsapp}`}>
          <FaWhatsapp size={20} />
        </MediaLink>
        <MediaLink href={customer.socialMedia.facebook}>
          <FaFacebook size={20} />
        </MediaLink>
        <MediaLink href={customer.socialMedia.instagram}>
          <FaInstagram size={20} />
        </MediaLink>
        <MediaLink href={customer.socialMedia.twitter}>
          <FaTwitter size={20} />
        </MediaLink>
        <MediaLink href={customer.socialMedia.linkedin}>
          <FaLinkedin size={20} />
        </MediaLink>
      </SocialMedia>
    </Container>
  );
};

Information.propTypes = {
  customer: PropTypes.shape({
    id: 1,
    name: 'Justine Robinson',
    enterprise: 'Acme inc',
    active: true,
    phone: '45 9 9555 55555',
    phoneType: 'Celular',
    email: 'justine@email.com',
    emailType: 'Trabalho',
    address: 'Avenida Brasil, 4019',
    addressType: 'Trabalho',
    latitude: -23.5439948,
    longitude: -46.6065452,
  }).isRequired,
};

export default Information;
