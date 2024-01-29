import { LetterState, MessageType } from 'src/types/GameTypes.ts';

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

export const getMessageStyle = (type: MessageType) => {
  switch (type) {
    case MessageType.SUCCESS:
      return 'bg-green-200 text-green-800';
    case MessageType.ERROR:
      return 'bg-red-200 text-red-800';
    case MessageType.WARNING:
      return 'bg-orange-200 text-orange-800';
    case MessageType.INFO:
      return 'bg-blue-200 text-blue-800';
    default:
      return '';
  }
};

export const getBoxStyle = (state: string) => {
  switch (state) {
    case LetterState.OK:
      return 'bg-red-600';
    case LetterState.MISPLACED:
      return 'bg-yellow-600 rounded-full';
    default:
      return '';
  }
};
