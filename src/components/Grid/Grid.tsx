import React from 'react';
import GridRow from 'src/components/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

const Grid: React.FC = () => (
  <div className="flex justify-center items-center flex-col">
    {
        generateArray(6).map((value) => (
          <GridRow key={value} />
        ))
    }
  </div>
);

export default Grid;
