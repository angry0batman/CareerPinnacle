import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background: #282c34;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h2`
  color: #61dafb;
  margin: 0;
  font-size: 24px;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Career Pinnacle</Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        {/* Add more links here */}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
