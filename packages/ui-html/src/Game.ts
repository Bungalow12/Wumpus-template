// TODO: Add the code you need here
import { GameControl } from '@wumpus/core';

export const Game = () => {
  const gameControl = new GameControl();
  const helloWumpus = document.createElement('h1');
  helloWumpus.innerText = "Hello Wumpus";
  document.body.append(helloWumpus);
};
