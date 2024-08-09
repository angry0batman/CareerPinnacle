import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: #fff;
  text-align: center;
  padding: 1.5rem;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Career Pinnacle. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
