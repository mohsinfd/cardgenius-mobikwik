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

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
          fill="#0000FF" fontSize="48" fontFamily="Arial, sans-serif" fontWeight="bold">
          Mobikwik
        </text>
      </svg>
    </LogoContainer>
  );
};

export default Logo; 