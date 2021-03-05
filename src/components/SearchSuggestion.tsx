import React from "react";

import { Suggestion } from "../types";

interface Props {
  suggestion?: Suggestion;
  relatedUserInput: string;
  onSelect?: (suggestionId: number) => void;
}

const SearchSuggestion: React.FC<Props> = ({
  suggestion,
  relatedUserInput,
  onSelect,
}) => {
  if (suggestion) {
    return (
      <li
        className="block px-4 py-2 pl-10 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        role="menuitem"
        value={suggestion.id}
        onClick={(e) => onSelect && onSelect(e.currentTarget.value)}
      >
        <div className="flex items-center">
          <img
            src={suggestion.imageURL}
            alt=""
            className="flex-shrink-0 h-6 w-6 rounded-full"
          ></img>
          <span className="ml-3 block font-normal truncate">
            {suggestion.text}
          </span>
          <span className="ml-2 truncate text-gray-500">{`@${suggestion.faction}`}</span>
        </div>
      </li>
    );
  } else {
    return (
      <li
        className="block px-4 py-2 pl-10 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        {`Keinen Politiker für "${relatedUserInput}" gefunden.`}
      </li>
    );
  }
};

export default SearchSuggestion;
