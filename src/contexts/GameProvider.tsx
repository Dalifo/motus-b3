import React, {
  createContext, Dispatch, PropsWithChildren, useReducer,
} from 'react';
import {
  GameAction, gameReducer, GameState, initialGameState,
} from 'src/contexts/GameReducer.ts';
import { Action } from 'src/types/ActionTypes.ts';

export const GameContext = createContext<[GameState, Dispatch<Action<GameAction>>]>([
  initialGameState,
  () => null,
]);

const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={[state, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
