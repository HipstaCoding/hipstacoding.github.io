import styled, { keyframes } from "styled-components";

const orbitTransform = (x, y, z, s) => {
  let tranformString = "translate(-50%,-50%)";
  if (x != null) tranformString += ` rotateX(${x}deg)`;
  if (y != null) tranformString += ` rotateY(${y}deg)`;
  if (z != null) tranformString += ` rotateZ(${z}deg)`;
  if (s != null) tranformString += ` scale(${s})`;
  return tranformString;
};

const electronTransform = (x, y, z, s) => {
  let tranformString = "translate(-50%,-50%)";
  if (z != null) tranformString += ` rotateZ(${z}deg)`;
  if (y != null) tranformString += ` rotateY(${y}deg)`;
  if (x != null) tranformString += ` rotateX(${x}deg)`;
  return tranformString;
};

const createOrbitKeyframes = (x, y, z = 0) => keyframes`
  0% { transform: ${orbitTransform(x, y, 0 + z)}; }
  100% { transform: ${orbitTransform(x, y, 360 + z)}; }
`;

const createStableElectronKeyframes = (x, y, z = 0) => keyframes`
  0% { transform: ${electronTransform(x, y, 0 + z)}; }
  25% { transform: ${electronTransform(x, y, -90 + z)}; }
  50% { transform: ${electronTransform(x, y, -180 + z)}; }
  75% { transform: ${electronTransform(x, y, -270 + z)}; }
  100% { transform: ${electronTransform(x, y, -360 + z)}; }
`;

const Container = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  perspective: 1500px;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const createElectronOrbit = (x, y, zShift) => styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  border-radius: 50%;
  height: calc(100% + 100px);
  width: calc(100% + 100px);
  transform-style: preserve-3d;
  transform: ${orbitTransform(x, y, zShift)};
  animation: ${createOrbitKeyframes(x, y, zShift)} 6s infinite linear;
  transform-origin: 50% 50%;
  z-index: 0;
`;

const createElectronContainer = (x, y, zShift) => styled.div`
  transform-origin: 50% 50%;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: ${electronTransform(x, y, zShift)};
  animation: ${createStableElectronKeyframes(x, y, zShift)} 6s infinite linear;
`;

// [x, y, z] -> x - starting X rotation, y - starting Y rotation, z - starting Z rotation in deg
const coords = [
  [75, 45, 0],
  [-75, 45, 0],
  [75, 0, 90],
];

const createElectronComponents = (x, y, zShift) => [
  createElectronOrbit(x, y, zShift),
  createElectronContainer(-x, -y, -zShift),
];

const Components = coords.map(e => {
  return createElectronComponents.apply(null, e);
});

export default function AtomImage({ src, className, electrons }) {
  return (
    <Container className={className}>
      <Img src={src} />
      {electrons.map((Electron, i) => {
        const [ElectronOrbit, ElectronContainer] = Components[i];
        return (
          <ElectronOrbit key={i}>
            <ElectronContainer>
              <Electron />
            </ElectronContainer>
          </ElectronOrbit>
        );
      })}
    </Container>
  );
}
