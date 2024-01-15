import React from 'react';
import GridBox from 'src/components/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

interface Props {
  length: number;
  letters: string;
}

const GridRow: React.FC<Props> = ({ length, letters }) => (
  <div className="flex">
    {
        generateArray(length).map((value) => (
          <GridBox
            key={value}
            letter={letters.charAt(value) ? letters[value] : ''}
          />
        ))
    }
  </div>
);

export default GridRow;
