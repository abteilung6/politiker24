import React from "react";

import { Comment, Message } from "../../types";

interface Props {
  message: Message;
  comment: Comment;
}

const MessagePreview: React.FC<Props> = ({ message, comment }) => {
  return (
    <div className="flex space-x-3 p-2">
      <div className="flex-shrink-0">
        <img className="h-6 w-6 rounded-full" src={comment.avatarURL} alt="" />
      </div>
      <div className="bg-gray-100 rounded px-3 border-2 border-indigo-100">
        <div className="text-sm">
          <a href="/" className="font-medium text-gray-900">
            {comment.author}
          </a>
        </div>
        <div className="mt-1 text-sm text-gray-700">
          <p>{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;
