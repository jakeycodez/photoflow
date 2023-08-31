import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';
import { logoFont } from '../styles/fonts';

const PageContainer = styled.div`
  margin: 0 auto;
`;

const BannerContainer = styled.div`
  width: 100%;
     box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const NavContainer = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Set your desired background color */

  padding: 0 20px; /* Adjust padding here */

  @media (max-width: 768px) {
    padding: 20px 20px; /* Adjust padding for mobile */
  }
`

const Logo = styled.div`
  ${logoFont}
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.07em;
  margin: 0;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-weight: 600;
  color: #727272;
  cursor: pointer;
  transition: color 0.3s, text-shadow 0.3s; /* Added transition properties */
  
  &:hover {
    color: black;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Cool text shadow effect */
  }
  
  &:last-child {
    margin-right: 0;
  }
`;


const MobileNavToggle = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

type MobileNavItemsProps = {
    isOpen: boolean;
  };

  const MobileNavItems = styled(NavItems)<MobileNavItemsProps>`
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: none;

  ${NavItem} {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    ${({ isOpen }) =>
      isOpen
        ? css`
            display: flex;
          `
        : css`
            display: none;
          `}
  }
`;

const FlexSpacer = styled.div`
  flex: 1;
`;

const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 204, 102, 0.8);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 204, 102, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 204, 102, 0.8);
  }
`;


const LoginButton = styled.button`
  background-color: #00cc66; /* Bright vibrant green */
  color: white;
  border: none;
  border-radius: 7px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00cc66; /* Bright vibrant green */
    animation: ${glowingAnimation} 1.5s infinite;
  }
`;

function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <PageContainer>
    <BannerContainer>
      <NavContainer>
      <Logo>
        <LogoText>PHOTOFLOW</LogoText>
      </Logo>
      <FlexSpacer />
      <NavItems>
        <NavItem>Product</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Resources</NavItem>
      </NavItems>
      <FlexSpacer />
      <NavItems>
        <NavItem>Login</NavItem>
        <LoginButton>Get Started</LoginButton>
      </NavItems>
      <MobileNavToggle onClick={toggleMobileNav}>
        <div>☰</div>
       
      </MobileNavToggle>
      <MobileNavItems isOpen={isMobileNavOpen}>
        <NavItem>Product</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Resources</NavItem>
      </MobileNavItems>
      </NavContainer>
      </BannerContainer>
    </PageContainer>
  );
}

export default Nav;
