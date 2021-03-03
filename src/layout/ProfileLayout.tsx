import React from "react";

import Navbar from "../components/Navbar";
import menus from "../constants/menu";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar menus={menus} selectedMenuId="home" />
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              [Name des Politiker]
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
