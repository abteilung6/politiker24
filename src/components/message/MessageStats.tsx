import React from "react";

import { Message } from "../../types";

interface Props {
  message: Message;
}

const MessageStats: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="text-sm font-medium text-gray-500">
        <svg
          className="w-4 h-4 pt-1 absolute"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <div className="pl-5">{message.likesCount}</div>
      </div>
      <div className="text-sm font-medium text-gray-500">
        {message.commentsCount} Kommentare
      </div>
    </div>
  );
};

export default MessageStats;
