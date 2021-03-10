import React from "react";

import { Comment, Message } from "../../types";

interface Props {
  message: Message;
  comment: Comment;
}

const MessagePreview: React.FC<Props> = ({ message, comment }) => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-3 p-2">
        <div className="flex-shrink-0">
          <img
            className="h-6 w-6 rounded-full"
            src={comment.avatarURL}
            alt=""
          />
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
      <div>
        <div className="flex space-x-3 p-2">
          <div className="flex-shrink-0">
            <span className="inline-block h-6 w-6 rounded-full overflow-hidden bg-gray-100">
              <svg
                className="h-full w-full text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <input
              className="rounded-full w-full sm:w-4/5 text-sm text-gray-700 border border-gray-200  hover:border-indigo-200 focus:border-indigo-200"
              type="text"
              name="comment"
              placeholder="Verfasse einen Kommentar ..."
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;
