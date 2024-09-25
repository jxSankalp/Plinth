import React from "react";
import Page from "./components/Page";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Footer from "./components/Footer";
import Page2 from "./components/Page2";

const App = () => {
  return (
    <>
      <CustomCursor />
      <ParticlesComponent id="particles" />
      <Page />
      <Page2 />
      <Footer />
    </>
  );
};

export default App;
