import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: (389) 79 270 586">(389) 79 281 992</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hristijangorgioski503@gmail.com">hristijangorgioski503@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/HristijanGjorgjioski">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/gorgioski-hristijan-24a51a20b/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com/gorgioski_/">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
