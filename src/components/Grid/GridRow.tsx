import React, { useContext } from 'react';
import GridBox from 'src/components/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { GameContext } from 'src/contexts/GameProvider.tsx';

interface Props {
  letters: string;
  result: string;
}

const GridRow: React.FC<Props> = ({ letters, result }) => {
  const [state] = useContext(GameContext);

  return (
    <div className="flex">
      {
        generateArray(state.word.length).map((value) => (
          <GridBox
            key={value}
            letter={letters.charAt(value) ? letters[value] : ''}
            state={result.charAt(value) ? result[value] : ''}
          />
        ))
      }
    </div>
  );
};

export default GridRow;
