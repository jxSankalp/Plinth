import React from "react";
import Page from "./components/Page";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import GalaxyBackground from "./components/GalaxyBackground";

const App = () => {
  return (
    <>
      <CustomCursor/>
      <ParticlesComponent id="particles"/>
      {/* <GalaxyBackground/> */}
      <Page />
    </>
  );
};

export default App;
