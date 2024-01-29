import React from 'react';
import LinkButton from 'src/components/Layout/LinkButton.tsx';
import { ButtonColor } from 'src/types/ColorTypes.ts';

const HomePage: React.FC = () => (
  <div>
    <LinkButton
      to="/game"
      label="Jouer"
      color={ButtonColor.RED}
    />

    <LinkButton
      to="/stats"
      label="Statistiques"
      color={ButtonColor.YELLOW}
    />
  </div>
);

export default HomePage;
