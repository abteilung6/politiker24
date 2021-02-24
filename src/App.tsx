import React from "react";

import Navbar from "./components/Navbar";
import menus from "./constants/menu";

const App: React.FC = () => {
  return <Navbar menus={menus} selectedMenuId="home" />;
};

export default App;
