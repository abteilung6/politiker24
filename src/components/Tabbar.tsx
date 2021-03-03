import React from "react";
import { Tab } from "../types";

interface Props {
  tabs: Tab[];
  selectedTabId?: string;
  onClick: (selectedTabId: string) => void;
}

const Tabbar: React.FC<Props> = ({ tabs, selectedTabId, onClick }) => {
  return (
    <div className="pb-8">
      <div className="border-b border-gray-200">
        <div className="sm:flex sm:items-baseline">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Genauere Informationen
          </h3>
          <div className="mt-4 sm:mt-0 sm:ml-10">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${
                    tab.id === selectedTabId
                      ? "border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none"
                  }`}
                  aria-current="page"
                  onClick={() => onClick(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabbar;
