import React from 'react';
import LinkButton from 'src/components/Layout/LinkButton.tsx';
import { ButtonColor } from 'src/types/ColorTypes.ts';

const StatsPage: React.FC = () => (
  <>
    <p>Les statistiques sont indisponibles pour le moment.</p>

    <LinkButton
      to="/"
      label="Retour"
      color={ButtonColor.BLUE}
    />
  </>
);

export default StatsPage;
