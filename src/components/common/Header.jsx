import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { mediaQueries } from "lib/screenSizes";
import Burger from "components/common/Burger";
import Container from "components/common/Container";

const StyledLogo = styled(Logo)`
  width: 120px;
  fill: white;
`;

const NavigationContainer = styled(Container)`
  top: 0;
  min-height: 80px;
  width: 100%;
  background-color: #1d1f23;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${mediaQueries.xs} {
    width: 100%;
    justify-content: space-between;
  }
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaQueries.xs} {
    flex-direction: column;
  }
`;

const MenuContainer = styled.div`
  overflow: hidden;
  transition: all 0.3s;

  @media ${mediaQueries.xs} {
    max-height: ${({ show }) => (show ? 320 : 0)}px;
    visibility: ${({ show }) => (show ? "shown" : "hidden")};
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

const StyledBurger = styled(Burger)`
  @media ${mediaQueries.sm} {
    display: none;
  }
`;

export default function Header({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <Navigation>
        <LogoContainer>
          <a href="#">
            <StyledLogo />
          </a>
          <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)} />
        </LogoContainer>
        <MenuContainer show={isOpen}>{children}</MenuContainer>
      </Navigation>
    </NavigationContainer>
  );
}
