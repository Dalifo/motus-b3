import React from 'react';
import KeyboardRow from 'src/components/Keyboard/KeyboardRow.tsx';

const firstLine = 'AZERTYUIOP';
const secondLine = 'QSDFGHJKLM';
const thirdLine = 'WXCVBN⌫⏎';

const Keyboard: React.FC = () => (
  <div className="flex justify-center items-center flex-col mt-12">
    <KeyboardRow line={firstLine} />
    <KeyboardRow line={secondLine} />
    <KeyboardRow line={thirdLine} />
  </div>
);

export default Keyboard;
