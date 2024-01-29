import React, { useContext } from 'react';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { getMessageStyle } from 'src/helpers/gameHelper.ts';

const Message: React.FC = () => {
  const [state] = useContext(GameContext);

  if (!state.message) return null;

  return (
    <div className={`${getMessageStyle(state.message.type)} p-4 w-1/2 mx-auto text-center rounded-md mb-8`}>
      {state.message.content}
    </div>
  );
};

export default Message;
