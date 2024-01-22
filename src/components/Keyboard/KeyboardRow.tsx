import React from 'react';
import KeyboardKey from 'src/components/Keyboard/KeyboardKey.tsx';

interface Props {
    line: string;
  handleKeyPress: (character: string) => void
}

const KeyboardRow: React.FC<Props> = ({ line, handleKeyPress }) => (
  <div className="flex">
    {line.split('').map((value) => (
      <KeyboardKey key={value} character={value} handleKeyPress={handleKeyPress} />
    ))}
  </div>
);

export default KeyboardRow;
