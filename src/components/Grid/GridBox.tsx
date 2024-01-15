import React from 'react';

interface Props {
  letter: string;
}

const GridBox: React.FC<Props> = ({ letter }) => (
  <div className="w-12 h-12 bg-blue-700 m-1 ">
    <div className="w-12 h-12 text-white text-2xl flex justify-center items-center">
      {letter}
    </div>
  </div>
);

export default GridBox;
