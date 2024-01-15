import React from 'react';
import GridBox from 'src/components/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

const GridRow: React.FC = () => (
  <div className="flex">
    {
        generateArray(8).map((value) => (
          <GridBox key={value} />
        ))
    }
  </div>
);

export default GridRow;
