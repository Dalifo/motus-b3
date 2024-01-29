import React, { useContext, useEffect } from 'react';
import { MessageType } from 'src/types/GameTypes.ts';
import { getRandomWord } from 'src/api/wordApi.ts';
import { formatWord } from 'src/helpers/genericHelper.ts';
import Spinner from 'src/components/Spinner.tsx';
import Message from 'src/components/Message.tsx';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { GameAction } from 'src/contexts/GameReducer.ts';
import { ButtonColor } from 'src/types/ColorTypes.ts';
import LinkButton from 'src/components/Layout/LinkButton.tsx';

const Game: React.FC = () => {
  const [state, dispatch] = useContext(GameContext);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    try {
      const randomWord = await getRandomWord();
      const formattedWord = formatWord(randomWord[0].name);

      dispatch({
        type: GameAction.START_GAME,
        payload: {
          word: formattedWord,
          attempts: [formattedWord.slice(0, 1)],
        },
      });
    } catch (e: Error|any) {
      console.error(e);

      dispatch({
        type: GameAction.SET_GAME_ERROR,
        payload: {
          message: {
            type: MessageType.ERROR,
            content: e.message,
          },
        },
      });
    }
  };

  if (state.loading) {
    return <Spinner />;
  }

  return (
    <>
      <Message />
      <Grid />
      <Keyboard />

      <LinkButton
        to="/"
        label="Quitter"
        color={ButtonColor.RED}
      />
    </>
  );
};

export default Game;
