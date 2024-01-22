import './App.css';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';
import { LetterState } from 'src/types/GameTypes.ts';
import { useState } from 'react';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

const WORD = 'CASTOR';

const App = () => {
  const [attempts, setAttempts] = useState([WORD.substring(0, 1)]);
  const [results, setResults] = useState<string[]>([]);

  const handleKeyPress = (character: string) => {
    const copy = [...attempts];

    switch (character) {
      case '⌫':
        copy[attempts.length - 1] = copy[attempts.length - 1].slice(0, -1);
        break;
      case '⏎':
        if (copy[attempts.length - 1].length < WORD.length) {
          console.log("Le mot n'est pas assez long");
          return;
        }

        const attemptResult = copy[attempts.length - 1].split('').map((letter, index) => {
          if (letter === WORD[index]) {
            return LetterState.OK;
          }

          if (WORD.includes(letter)) {
            return LetterState.MISPLACED;
          }

          return LetterState.NOK;
        });

        setResults([...results, attemptResult.join('')]);

        if (copy[attempts.length - 1] === WORD) {
          console.log('Bien ouej');
          return;
        }

        if (attempts.length === NB_ATTEMPTS) {
          console.log('Raté');
          return;
        }

        setAttempts([...attempts, WORD.substring(0, 1)]);
        return;

        break;
      default:
        if (copy[attempts.length - 1].length === WORD.length) {
          return false;
        }

        copy[attempts.length - 1] = `${copy[attempts.length - 1]}${character}`;
        break;
    }

    setAttempts(copy);
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-center text-5xl mt-12 mb-8">Motus</h1>

      <Grid
        length={WORD.length}
        attempts={attempts}
        results={results}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
