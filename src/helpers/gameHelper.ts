import { LetterState } from 'src/types/GameTypes.ts';

export const getAttemptResult = (attempt: string, wordToGuess: string) => (
  attempt.split('').map((letter, index) => {
    if (letter === wordToGuess[index]) {
      return LetterState.OK;
    }

    if (wordToGuess.includes(letter)) {
      return LetterState.MISPLACED;
    }

    return LetterState.NOK;
  })
);
