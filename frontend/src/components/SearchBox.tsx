import React, { useState } from "react";

import { Suggestion } from "../types";
import SearchSuggestion from "./SearchSuggestion";

interface Props {
  suggestions: ReadonlyArray<Suggestion>;
  onSelect?: (suggestionId: number) => void;
}

const SearchBox: React.FC<Props> = ({ suggestions, onSelect }) => {
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );

  const onChange = (value: string) => {
    setUserInput(value);
    if (value === "") {
      setFilteredSuggestions([]);
    } else {
      setFilteredSuggestions(
        suggestions.filter(
          (suggestion) =>
            suggestion.text.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      );
    }
  };

  const onSelectSuggestion = (value: number) => {
    setFilteredSuggestions([]);
    setUserInput("");
    onSelect && onSelect(value);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        name="politiker"
        className="pl-10 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Politiker suchen"
        autoComplete="off"
        value={userInput}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      {userInput && (
        <div className="origin-top-right absolute w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion) => (
                <SearchSuggestion
                  key={suggestion.id}
                  suggestion={suggestion}
                  relatedUserInput={userInput}
                  onSelect={onSelectSuggestion}
                />
              ))
            ) : (
              <SearchSuggestion relatedUserInput={userInput} />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
