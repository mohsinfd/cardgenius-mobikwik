import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
`;

const Logo = () => {
  return (
    <StyledLink to="/">
      <LogoImage src="https://jep-asset.akamaized.net/cms/assets/jioapps/jfs/newsvg.svg" alt="JioCredit Logo" />
      <LogoText>JioCredit</LogoText>
    </StyledLink>
  );
};

export default Logo; 