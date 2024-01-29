import React, { useContext } from 'react';
import GridRow from 'src/components/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';
import { GameContext } from 'src/contexts/GameProvider.tsx';

const Grid: React.FC = () => {
  const [state] = useContext(GameContext);

  return (
    <div className="flex justify-center items-center flex-col">
      {
        generateArray(NB_ATTEMPTS).map((value) => (
          <GridRow
            key={value}
            letters={value in state.attempts ? state.attempts[value] : ''}
            result={value in state.results ? state.results[value] : ''}
          />
        ))
      }
    </div>
  );
};

export default Grid;
