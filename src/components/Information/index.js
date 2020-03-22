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
} from './styles';

const Information = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Personal>
        <Avatar>
          <MdPerson size={58} />
        </Avatar>
        <UserInfo>
          <Name>Justine Ronbinson</Name>
          <Enterprise>Acme inc</Enterprise>
          <Tag>Ativo</Tag>
        </UserInfo>
      </Personal>
      <Contact>
        <MdLocalPhone size={26} />
        <ContactWrapInfo>
          <ContactInfo>45 9 9555 5555</ContactInfo>
          <ContactInfo>Celular</ContactInfo>
        </ContactWrapInfo>
      </Contact>
      <Contact>
        <MdMarkunread size={26} />
        <ContactWrapInfo>
          <ContactInfo>justine@email.com</ContactInfo>
          <ContactInfo>Trabalho</ContactInfo>
        </ContactWrapInfo>
      </Contact>
      <SocialMedia>
        <FaWhatsapp size={20} />
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
      </SocialMedia>
    </Container>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Information;
