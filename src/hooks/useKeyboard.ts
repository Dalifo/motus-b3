import { useContext } from 'react';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { GameAction } from 'src/contexts/GameReducer.ts';

const useKeyboard = () => {
  const [, dispatch] = useContext(GameContext);

  const handleKeyPress = (character: string) => {
    switch (character) {
      case '⌫':
        dispatch({
          type: GameAction.REMOVE_LETTER,
        });
        break;
      case '⏎':
        dispatch({
          type: GameAction.VALID_ATTEMPT,
        });
        break;
      default:
        dispatch({
          type: GameAction.ADD_LETTER,
          payload: character,
        });
    }
  };

  return { handleKeyPress };
};

export default useKeyboard;
