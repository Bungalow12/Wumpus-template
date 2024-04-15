import { JSX, useMemo } from 'react';
import { GameControl } from '@wumpus/core/dist/GameControl';

const Game = (): JSX.Element => {
  const gameControl: GameControl = useMemo(() => {
    return new GameControl();
  }, []); // The empty dependencies means to only update 1 time

  return (
    <div>
      <h1>Hello Wumpus!</h1>
      {/* TODO: Add your elements for your UI here */}
    </div>
  );
};

export default Game;
