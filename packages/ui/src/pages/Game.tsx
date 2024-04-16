import { JSX, useEffect, useMemo } from 'react';
import { GameControl } from '@wumpus/core';

const Game = (): JSX.Element => {
  const gameControl: GameControl = useMemo<GameControl>(() => {
    return new GameControl();
  }, []); // The empty dependencies means to only update 1 time

  useEffect(() => {
    // TODO: This can be used for setup and should only need to be done once
    //   For example using ThreeJS or some other framework setting it up here and allowing
    //   the application to be built elsewhere
  }, []);

  return (
    <div>
      <h1>Hello Wumpus!</h1>
      {/* TODO: Add your elements for your UI here.
           If you are using other frameworks like ThreeJS, Babylon.JS or just drawing to a Canvas you
           may not need too much here and instead rely on your state rather than React
      */}
    </div>
  );
};

export default Game;
