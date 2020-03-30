import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import Loading from '../Loading';

const Information = ({ customer, loading }) => {
  if (loading) return <Loading>carregando...</Loading>;

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
    id: PropTypes.number,
    name: PropTypes.string,
    enterprise: PropTypes.string,
    active: PropTypes.bool,
    phone: PropTypes.string,
    phoneType: PropTypes.string,
    email: PropTypes.string,
    emailType: PropTypes.string,
    address: PropTypes.string,
    addressType: PropTypes.string,
    socialMedia: PropTypes.shape({
      whatsapp: PropTypes.string,
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      linkedin: PropTypes.string,
    }),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  customer: state.customer.data,
  loading: state.customer.loading,
});

export default connect(mapStateToProps)(Information);
