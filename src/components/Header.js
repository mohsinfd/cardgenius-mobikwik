import React from 'react';
import styled from 'styled-components';
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
    background: var(--light-gray);
    color: var(--primary-color);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuItems>
          {/* Add menu items here if needed */}
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 