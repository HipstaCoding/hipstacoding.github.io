import styled, { keyframes } from "styled-components";

const orbitTransform = (x, y, z) => {
  let tranformString = "translate(-50%,-50%)";
  if (x != null) tranformString += ` rotateX(${x}deg)`;
  if (y != null) tranformString += ` rotateY(${y}deg)`;
  if (z != null) tranformString += ` rotateZ(${z}deg)`;
  return tranformString;
};

const electronTransform = (x, y, z) => {
  let tranformString = "translate(-50%,-50%)";
  if (z != null) tranformString += ` rotateZ(${-z}deg)`;
  if (y != null) tranformString += ` rotateY(${-y}deg)`;
  if (x != null) tranformString += ` rotateX(${-x}deg)`;
  return tranformString;
};

const createOrbitKeyframes = (x, y, z = 0) => keyframes`
  0% { transform: ${orbitTransform(x, y, 0 + z)}; }
  100% { transform: ${orbitTransform(x, y, 360 + z)}; }
`;

const createStableElectronKeyframes = (x, y, z = 0) => keyframes`
  0% { transform: ${electronTransform(x, y, 0 + z)}; }
  25% { transform: ${electronTransform(x, y, 90 + z)}; }
  50% { transform: ${electronTransform(x, y, 180 + z)}; }
  75% { transform: ${electronTransform(x, y, 270 + z)}; }
  100% { transform: ${electronTransform(x, y, 360 + z)}; }
`;

const imageAnimation = keyframes`
  0% { transform: translateY(0%); }
  100% { transform: translateY(5%); }
`

const Container = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  perspective: 1200px;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  animation: ${imageAnimation} 2s infinite ease-in-out alternate;
`;

const ElectronOrbit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  border-radius: 50%;
  height: calc(100% + 100px);
  width: calc(100% + 100px);
  transform-style: preserve-3d;
  transform: ${props => props.transform};
  animation: ${props => props.animationName} 4s infinite linear;
  transform-origin: 50% 50%;
  z-index: 0;
`;

const ElectronContainer = styled.div`
  transform-origin: 50% 50%;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: ${props => props.transform};
  animation: ${props => props.animationName} 4s infinite linear;
`;

const START_POSITION_CORDS_DEG = [
  [75, 45, 0],
  [-75, 45, 0],
  [60, 0, 90],
];

const createElectronComponents = (x, y, z) => ({
  orbitTransform: orbitTransform(x, y, z),
  orbitAnimationName: createOrbitKeyframes(x, y, z),
  electronTransform: electronTransform(x, y, z),
  electronAnimationName: createStableElectronKeyframes(x, y, z),
});

const Electrons = ({ electrons }) => {
  return electrons.map((Electron, i) => {
    const {
      orbitTransform,
      orbitAnimationName,
      electronTransform,
      electronAnimationName,
    } = createElectronComponents.apply(null, START_POSITION_CORDS_DEG[i]);

    return (
      <ElectronOrbit
        key={Electron.key}
        transform={orbitTransform}
        animationName={orbitAnimationName}
      >
        <ElectronContainer
          transform={electronTransform}
          animationName={electronAnimationName}
        >
          <Electron />
        </ElectronContainer>
      </ElectronOrbit>
    );
  });
};

export default function AtomImage({ src, className, electrons }) {
  return (
    <Container className={className}>
      <Img src={src} />
      <Electrons electrons={electrons} />
    </Container>
  );
}
