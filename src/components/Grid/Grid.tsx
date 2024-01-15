import React from 'react';
import GridRow from 'src/components/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

interface Props {
  length: number;
  attempts: string[];
}

const Grid: React.FC<Props> = (props) => {
  const { length, attempts } = props;

  return (
    <div className="flex justify-center items-center flex-col">
      {
        generateArray(6).map((value) => (
          <GridRow
            key={value}
            length={length}
            letters={value in attempts ? attempts[value] : ''}
          />
        ))
      }
    </div>
  );
};

export default Grid;
