import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { screenSizes } from "lib/screenSizes";
import Burger from "components/common/Burger";

const StyledLogo = styled(Logo)`
  width: 160px;
  fill: white;
  padding: 20px;
`;

const Container = styled.header`
  position: sticky;
  top: 0;
  min-height: 120px;
  width: 100%;
  background-color: #1d1f23;
  font-family: "Montserrat", sans-serif;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${screenSizes.xs} {
    width: 100%;
    justify-content: space-between;
  }
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${screenSizes.xs} {
    flex-direction: column;
  }
`;

const MenuContainer = styled.div`
  overflow: hidden;
  padding: 2px;
  transition: all 0.3s;

  @media ${screenSizes.xs} {
    max-height: ${({ show }) => (show ? 320 : 0)}px;
    visibility: ${({ show }) => (show ? "shown" : "hidden")};
    a {
      width: 100%;
      text-align: center;
    }
  }
`;

const StyledBurger = styled(Burger)`
  @media ${screenSizes.sm} {
    display: none;
  }
`;

export default function Header({ children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container>
      <Navigation>
        <LogoContainer>
          <StyledLogo />
          <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)} />
        </LogoContainer>
        <MenuContainer show={isOpen}>{children}</MenuContainer>
      </Navigation>
    </Container>
  );
}
