import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: #007bff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavBrand = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  &:hover {
    color: #e0e0e0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #e0e0e0;
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBrand to="/">Score Checker</NavBrand>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </NavBarContainer>
  );
};

export default Navbar;
