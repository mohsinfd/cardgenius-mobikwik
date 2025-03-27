import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 120px;
  height: 40px;
  margin-right: 0.75rem;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 32px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src="/mobikwik-logo.png" alt="Mobikwik" />
    </LogoContainer>
  );
};

export default Logo; 