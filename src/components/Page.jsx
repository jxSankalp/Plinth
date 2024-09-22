import { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import "./page.css";

// Throttle function to limit the frequency of the tilt effect
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const Page = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showXXV, setShowXXV] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Scramble effect logic
  const scrambleEffect = useCallback((onComplete) => {
    const plinthEl = document.querySelector("[data-text='PLINTH']");
    if (!plinthEl) return;

    const words = Array(26)
      .fill(0)
      .map((_, i) => String.fromCharCode(i + 65)); // A-Z

    const getRandomString = (len) => {
      const wordsCopy = words.slice();
      wordsCopy.sort(() => 0.5 - Math.random());
      return wordsCopy.slice(0, len).join("");
    };

    let settledIndex = 0;
    const originalText = "PLINTH";
    const totalDuration = 1000; // Total duration of the scramble effect in ms
    const intervalDuration = 80; // Duration between each update
    const iterations = totalDuration / intervalDuration;
    let currentIteration = 0;

    const interval = setInterval(() => {
      currentIteration++;
      let randomString = getRandomString(originalText.length);

      // Calculate settled index based on current iteration
      settledIndex = Math.floor(
        (currentIteration / iterations) * originalText.length
      );

      const currentText = Array.from(originalText)
        .map((char, i) => {
          if (i < settledIndex) return char;
          if (char === " ") return " ";
          return randomString[i];
        })
        .join("");

      plinthEl.textContent = currentText;

      if (currentIteration >= iterations) {
        clearInterval(interval);
        plinthEl.textContent = originalText;
        if (onComplete) onComplete();
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  // Handle tilt effect on mouse move
  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 35;
      const rotateY = (centerX - x) / 35;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  // Reset tilt on mouse leave
  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const cleanup = scrambleEffect(() => {
      setShowXXV(true);
      setTimeout(() => {
        setShowComingSoon(true);
      }, 1050); // Delay for "coming soon"
    });
    return cleanup;
  }, [scrambleEffect]);

  return (
    <>
      <Navbar />

      <div className="bg-black h-screen flex flex-col justify-center items-center relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pt-[1rem]">
          {/* PLINTH text with tilt effect */}
          <div
            data-text="PLINTH"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
            className="text-transparent bg-Green-gradient bg-clip-text text-[14rem] font-extrabold font-akira leading-none tracking-[1.7rem]"
          >
            PLINTH
          </div>

          {/* XXV text */}
          <div
            className={`text-gray-200 text-[14rem] font-extrabold font-akira leading-none tracking-[-0.07em] px-4 transition-opacity duration-100 ${
              showXXV ? "opacity-100 animate-slideIn" : "opacity-0"
            }`}
          >
            XXV
          </div>

          {/* Coming soon text */}
          <div
            className={`text-white text-[5rem] transition-opacity duration-500 font-kodchasan ${
              showComingSoon ? "opacity-100 typewriter" : "opacity-0"
            }`}
          >
            <h1>COMING SOON</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
