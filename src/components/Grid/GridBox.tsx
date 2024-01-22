import React from 'react';
import { LetterState } from 'src/types/GameTypes.ts';

interface Props {
  letter: string;
  state: string;
}

const getBoxClasses = (state: string) => {
  switch (state) {
    case LetterState.OK:
      return 'bg-red-600';
    case LetterState.MISPLACED:
      return 'bg-yellow-600 rounded-full';
    default:
      return '';
  }
};

const GridBox: React.FC<Props> = ({ letter, state }) => (
  <div className="w-12 h-12 bg-blue-700 m-1 ">
    <div className={`${getBoxClasses(state)} w-12 h-12 text-white text-2xl flex justify-center items-center`}>
      {letter}
    </div>
  </div>
);

export default GridBox;
