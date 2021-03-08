import React from "react";

import { Message } from "../../types";

import MessageItem from "./MessageItem";

interface Props {
  messages: ReadonlyArray<Message>;
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
