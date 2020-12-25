import styled from "styled-components";

const Container = styled.code`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0.05em solid ${({ theme }) => theme.colors.textColor};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 54px;
  height: 54px;

  :not(:last-child) {
    margin-right: 4px;
  }
`;

const Mac = {
  ctrl: "⌘",
  shift: "⇧",
  alt: "⌥",
  enter: "⏎",
  tab: "↹",
};

export default function Hotkey({ mac, win }) {
  const replaced = mac.map(key => (Mac[key] !== undefined ? Mac[key] : key));
  return replaced.map(key => <Container key={key}>{key}</Container>);
}
