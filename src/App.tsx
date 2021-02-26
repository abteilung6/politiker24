import React from "react";
import FactionIndexGraph from "./components/FactionIndexGraph";

import Navbar from "./components/Navbar";
import menus from "./constants/menu";

const App: React.FC = () => {
  return (
    <>
      <Navbar menus={menus} selectedMenuId="home" />
      <div style={{ height: 400 }}>
        {" "}
        <FactionIndexGraph />
      </div>
    </>
  );
};

export default App;
