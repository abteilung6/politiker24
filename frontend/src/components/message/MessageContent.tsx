import React from "react";

import { Message } from "../../types";

interface Props {
  message: Message;
}

const MessageContent: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src={message.avatarURL}
          alt=""
        />
      </div>
      <div>
        <div className="text-sm">
          <a href="/" className="font-medium text-gray-900">
            {message.author}
          </a>
        </div>
        <div className="mt-1 text-sm text-gray-700">
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
