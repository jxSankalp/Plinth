import React from "react";
import { useState, useEffect, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import AnimatedPreloader from "./components/AnimatedPreloader";

const Page2 = React.lazy(() => import('./components/Page2'));
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsPreloading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 5500);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <div className="relative w-screen min-h-screen">
      <CustomCursor />
      
      <ParticlesComponent id="particles" />

      
      <div
        className="fixed inset-0 z-50 bg-transparent transition-transform duration-1000 ease-in-out"
        style={{
          transform: isPreloading ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <AnimatedPreloader />
      </div>
      
      
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Page />

        <Suspense fallback={<div>Loading Page2...</div>}>
          <Page2 />
        </Suspense>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
