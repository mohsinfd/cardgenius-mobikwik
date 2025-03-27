import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const HeaderContainer = styled.header`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #FF6B00;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #FFF5EB;
    color: #FF6B00;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer onClick={handleHomeClick}>
          <Logo />
          <LogoText>Mobikwik</LogoText>
        </LogoContainer>
        <MenuItems>
          <MenuItem href="#about">About</MenuItem>
          <MenuItem href="#features">Features</MenuItem>
          <MenuItem href="#contact">Contact</MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 