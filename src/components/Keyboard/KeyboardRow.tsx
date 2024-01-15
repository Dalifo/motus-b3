import React from 'react';
import KeyboardKey from 'src/components/Keyboard/KeyboardKey.tsx';

interface Props {
    line: string;
}

const KeyboardRow: React.FC<Props> = ({ line }) => (
  <div className="flex">
    {line.split('').map((value) => (
      <KeyboardKey key={value} character={value} />
    ))}
  </div>
);

export default KeyboardRow;
