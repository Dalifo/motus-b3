import React from 'react';
import Game from 'src/components/Game.tsx';
import GameProvider from 'src/contexts/GameProvider.tsx';

const GamePage: React.FC = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default GamePage;
