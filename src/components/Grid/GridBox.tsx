import React from 'react';
import { getBoxStyle } from 'src/helpers/gameHelper.ts';

interface Props {
  letter: string;
  state: string;
}

const GridBox: React.FC<Props> = ({ letter, state }) => (
  <div className="w-12 h-12 bg-blue-700 m-1 ">
    <div className={`${getBoxStyle(state)} w-12 h-12 text-white text-2xl flex justify-center items-center`}>
      {letter}
    </div>
  </div>
);

export default GridBox;
