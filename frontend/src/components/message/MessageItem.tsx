import React from "react";

import { Message } from "../../types";

import MessageActions from "./MessageActions";
import MessageContent from "./MessageContent";
import MessagePreview from "./MessagePreview";
import MessageStats from "./MessageStats";

import { comment } from "../../data/messages";

interface Props {
  message: Message;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div className="bg-white overflow-hidden shadow hover:shadow-lg divide-y divide-gray-200">
      <div className="px-4 py-6 sm:px-6">
        <ul className="space-y-8">
          <li>
            <MessageContent message={message} />
          </li>
        </ul>
      </div>
      <div className="px-4 py-1 sm:px-6">
        <MessageStats message={message} />
      </div>
      <div className="px-4 py-1 sm:px-6">
        <MessageActions />
      </div>
      <div className="px-4 py-1 sm:px-6">
        <MessagePreview message={message} comment={comment} />
      </div>
    </div>
  );
};

export default MessageItem;
