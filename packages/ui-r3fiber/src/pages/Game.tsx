import { JSX, useEffect, useMemo } from 'react';
import { GameControl } from '@wumpus/core';
import { Canvas } from '@react-three/fiber';
import { RotatingCube } from '../components/RotatingCube';

const Game = (): JSX.Element => {
  const gameControl: GameControl = useMemo<GameControl>(() => {
    return new GameControl();
  }, []); // The empty dependencies means to only update 1 time

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <RotatingCube position={[-1.2, 0, 0]} />
        <RotatingCube position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Game;
