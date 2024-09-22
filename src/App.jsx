import React from "react";
import Page from "./components/Page";
import CustomCursor from "./components/CustomCursor";
import GalaxyBackground from "./components/GalaxyBackground";

const App = () => {
  return (
    <>
      <CustomCursor/>
      <GalaxyBackground/>
      <Page />
    </>
  );
};

export default App;
