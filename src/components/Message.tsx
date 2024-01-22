import React from 'react';
import { MessageType, Message as MessageInterface } from 'src/types/GameTypes.ts';

interface Props {
    message: MessageInterface
}

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

const Message: React.FC<Props> = ({ message }) => (
  <div className={`${getBackground(message.type)} p-4 w-1/2 mx-auto text-center rounded-md mb-8`}>
    {message.content}
  </div>
);

export default Message;
