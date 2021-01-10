import styled from "styled-components";


const StyledSection = styled.section`
  h3 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 0.01em;
  }

  h1 {
    font-size: 3.5rem;
    font-family: "Source Code Pro", monospace;
  }

  hr {
    width: 90px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.textColor};
  }
`;

export default function FirstSection({ backgroundImg, children }) {
  return (
    <StyledSection
      data-background-image={backgroundImg}
      data-background-size="cover"
      data-background-position="top left"
      data-background-opacity="0.1"
    >
      {children}
    </StyledSection>
  );
}
