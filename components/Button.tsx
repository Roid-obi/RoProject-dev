"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgba(88, 97, 228, 0.30);
  /* border: 0.5px solid white; */
  box-shadow: rgba(88, 97, 228, 0.2) 0px 2px 8px 0px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }

  @media screen and (max-width: 1000px) {
    padding: 10px 30px;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, target, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Mocking an API call or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace this with your actual asynchronous operation
  };

  return (
    <Link href={href || ''} target={target}>
      <StyledButton onClick={handleClick} disabled={isLoading} {...props}>
        {isLoading ? 'Loading ...' : children}
      </StyledButton>
    </Link>
  );
};

export default Button;
