import React from "react";
import styled from "styled-components";

const LogoContainer = styled.h1`
  font-family: "Inconsolata", monospace;
  width: 70px;
  border: 2px solid black;
  padding: 10px;
  margin: 0;
  margin-right: 55px;
`;

const Logo = () => <LogoContainer>Hipsta Coding School</LogoContainer>;

export default Logo;
