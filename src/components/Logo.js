import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 64px;
  height: 44px;
  margin-right: 0.75rem;
  
  @media (max-width: 768px) {
    width: 48px;
    height: 32px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
        <defs>
          <linearGradient id="gradientCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6B00"/>
            <stop offset="100%" stopColor="#FF8533"/>
          </linearGradient>
        </defs>
        <rect x="40" y="30" width="220" height="140" rx="15" fill="url(#gradientCard)" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="48" fontFamily="Arial, sans-serif" fontWeight="bold">M</text>
      </svg>
    </LogoContainer>
  );
};

export default Logo; 