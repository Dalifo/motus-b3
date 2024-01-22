import React from 'react';

interface Props {
    character: string;
  handleKeyPress: (character: string) => void
}

const KeyboardKey: React.FC<Props> = ({ character, handleKeyPress }) => (
  <button
    key={character}
    type="button"
    className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1"
    onClick={() => handleKeyPress(character)}
  >
    {character}
  </button>
);

export default KeyboardKey;
