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
        className="block px-4 py-2 pl-10 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
        value={suggestion.id}
        onClick={(e) => onSelect && onSelect(e.currentTarget.value)}
      >
        {suggestion.text}
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
