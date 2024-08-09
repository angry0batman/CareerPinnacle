import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #007bff;
  padding: 20px;
  text-align: center;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Score Checker App. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
