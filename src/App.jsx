import React from "react";
import { useState, useEffect, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import AnimatedPreloader from "./components/AnimatedPreloader";

// Lazy load components
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
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <ParticlesComponent id="particles" />

      {/* Preloader */}
      <div
        className="fixed inset-0 z-50 bg-black transition-transform duration-1000 ease-in-out"
        style={{
          transform: isPreloading ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <AnimatedPreloader />
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Page />

        {/* Lazy-loaded components with Suspense */}
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
