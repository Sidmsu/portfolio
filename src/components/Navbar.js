import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1e1e1e;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  padding: 5px;

  &:hover {
    text-decoration: none;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  background-color: #333;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Button = styled(Link)`
  background: linear-gradient(90deg, #ff7a18, #ffb300);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1em;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: linear-gradient(90deg, #ffb300, #ff7a18);
  }
`;

const Navbar = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink smooth to="/#about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <IconWrapper onClick={handleReload}>
          <FontAwesomeIcon icon={faDribbble} color="#ffb300" />
        </IconWrapper>
        <Button smooth to="/#contact">
          <FontAwesomeIcon icon={faDribbble} />
          Contact Me
        </Button>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
