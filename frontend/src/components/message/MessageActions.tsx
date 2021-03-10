import React from "react";

interface Props {}

const MessageActions: React.FC<Props> = () => {
  return (
    <div className="space-x-4">
      <button
        type="button"
        className="text-sm font-medium text-gray-500 hover:text-indigo-500"
      >
        Gefällt mir
      </button>
      <button
        type="button"
        className="text-sm font-medium text-gray-500 hover:text-indigo-500"
      >
        Kommentieren
      </button>
    </div>
  );
};

export default MessageActions;
