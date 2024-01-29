import React from 'react';
import useKeyboard from 'src/hooks/useKeyboard.ts';

interface Props {
  character: string;
}

const KeyboardKey: React.FC<Props> = ({ character }) => {
  const { handleKeyPress } = useKeyboard();

  return (
    <button
      key={character}
      type="button"
      className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1"
      onClick={() => handleKeyPress(character)}
    >
      {character}
    </button>
  );
};

export default KeyboardKey;
