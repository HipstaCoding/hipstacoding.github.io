import styled from "styled-components";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  position: relative;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.textColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    position: relative;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-0.25rem) rotate(45deg)" : "rotate(0)"};
      transform-origin: 50% 50%;
    }

    :last-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default function Burger(props) {
  return (
    <StyledBurger {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
