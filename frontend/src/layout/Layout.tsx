import React from "react";

import Navbar from "../components/Navbar";
import { navs } from "../constants/navigation";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar navs={navs} selectedMenuId="home" />
      <div className="py-2">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
