import { Message as MessageInterface, MessageType } from 'src/types/GameTypes.ts';
import { Action } from 'src/types/ActionTypes.ts';
import { getAttemptResult } from 'src/helpers/gameHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

export enum GameAction {
  START_GAME = 'START_GAME',
  ADD_LETTER = 'ADD_LETTER',
  REMOVE_LETTER = 'REMOVE_LETTER',
  VALID_ATTEMPT = 'VALID_ATTEMPT',
  SET_GAME_ERROR = 'SET_GAME_ERROR',
}

export interface GameState {
  word: string;
  attempts: string[],
  results: string[],
  message: MessageInterface|null,
  loading: boolean,
}

export const initialGameState: GameState = {
  word: '',
  attempts: [],
  results: [],
  message: null,
  loading: true,
};

export const gameReducer = (state: GameState, action: Action<GameAction>) => {
  const { attempts, word } = state;
  const copy = [...attempts];

  switch (action.type) {
    case GameAction.ADD_LETTER:
      if (copy[attempts.length - 1].length === word.length) {
        return state;
      }

      copy[attempts.length - 1] = `${copy[attempts.length - 1]}${action.payload}`;

      return {
        ...state,
        attempts: copy,
      };
    case GameAction.REMOVE_LETTER:
      copy[attempts.length - 1] = copy[attempts.length - 1].slice(0, -1);

      return {
        ...state,
        attempts: copy,
      };
    case GameAction.START_GAME:
      return {
        ...state,
        word: action.payload.word,
        attempts: action.payload.attempts,
        loading: false,
      };
    case GameAction.VALID_ATTEMPT:
      return validAttempt(state);
    case GameAction.SET_GAME_ERROR:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const validAttempt = (state: GameState) => {
  const { attempts, word, results } = state;
  const copy = [...attempts];

  if (copy[attempts.length - 1].length < word.length) {
    return {
      ...state,
      message: {
        type: MessageType.WARNING,
        content: "Votre mot n'est passez long",
      },
    };
  }

  const attemptResult = getAttemptResult(copy[attempts.length - 1], word);

  if (copy[attempts.length - 1] === word) {
    return {
      ...state,
      message: {
        type: MessageType.SUCCESS,
        content: 'Vous avez gagné, Bravo !',
      },
      results: [...results, attemptResult.join('')],
    };
  }

  if (attempts.length === NB_ATTEMPTS) {
    return {
      ...state,
      message: {
        type: MessageType.INFO,
        content: 'Dommage, vous avez perdu',
      },
      results: [...results, attemptResult.join('')],
    };
  }

  return {
    ...state,
    attempts: [...attempts, word.substring(0, 1)],
    results: [...results, attemptResult.join('')],
  };
};
