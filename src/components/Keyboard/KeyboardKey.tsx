import React, { useContext } from 'react';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { GameAction } from 'src/contexts/GameReducer.ts';

interface Props {
  character: string;
}

const KeyboardKey: React.FC<Props> = ({ character }) => {
  const [, dispatch] = useContext(GameContext);

  const handleKeyPress = () => {
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

  return (
    <button
      key={character}
      type="button"
      className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1"
      onClick={handleKeyPress}
    >
      {character}
    </button>
  );
};

export default KeyboardKey;
