import React from "react";
import styled from "styled-components";

const Container = styled.code`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #abb2bf;
  background: #282c34;
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
