import React, { useContext } from 'react';
import { MessageType } from 'src/types/GameTypes.ts';
import { GameContext } from 'src/contexts/GameProvider.tsx';

const getBackground = (type: MessageType) => {
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

const Message: React.FC = () => {
  const [state] = useContext(GameContext);

  if (!state.message) return null;

  return (
    <div className={`${getBackground(state.message.type)} p-4 w-1/2 mx-auto text-center rounded-md mb-8`}>
      {state.message.content}
    </div>
  );
};

export default Message;
