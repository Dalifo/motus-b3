import React from 'react';
import Spinner from 'src/components/Spinner.tsx';
import Message from 'src/components/Message.tsx';
import Grid from 'src/components/Grid/Grid.tsx';
import Keyboard from 'src/components/Keyboard/Keyboard.tsx';
import { ButtonColor } from 'src/types/ColorTypes.ts';
import LinkButton from 'src/components/Layout/LinkButton.tsx';
import useGame from 'src/hooks/useGame.ts';

const Game: React.FC = () => {
  const { loading, error } = useGame();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>PROBLEME</div>;
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
