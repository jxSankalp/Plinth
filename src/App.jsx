import Page from "./components/Page";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Footer from "./components/Footer";
import Page2 from "./components/Page2";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className=""><Navbar/></div>
      <CustomCursor />
      <ParticlesComponent id="particles" />
      <Page />
      <Page2 />
      <Footer />
    </>
  );
};

export default App;
