import React from "react";
import Page from "./components/Page";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CustomCursor/>
      <ParticlesComponent id="particles"/>
      <Page />
      <Footer/>
    </>
  );
};

export default App;
