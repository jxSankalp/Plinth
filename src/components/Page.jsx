import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./page.css";
import { Glow } from "../assets/svg";

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

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const xxvTimeout = setTimeout(() => {
      setShowXXV(true);
    }, 1000);

    const comingSoonTimeout = setTimeout(() => {
      setShowComingSoon(true);
    }, 2500);

    return () => {
      clearTimeout(xxvTimeout);
      clearTimeout(comingSoonTimeout);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col relative">
        {/* Glow SVG on top of the background, but below PLINTH text */}
        <div className="overflow-hidden glow1 top-[30rem] w-[60rem] h-[65rem] z-10">
          <img
            src={Glow}
            alt="Plinth Glow"
            className="h-full w-full"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pt-[1rem] z-20">
          <div
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

          <div className="xxv-container">
            <h1 className="xxv-text">
              {['X', 'X', 'V'].map((letter, index) => (
                <motion.span 
                  key={index} 
                  className={`xxv-letter font-extrabold font-akira leading-none xxv-gradient`} 
                  initial={{ opacity: 0, y: 100 }}
                  animate={showXXV ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 1.5, 
                    delay: showXXV ? index * 0.2 : 0, 
                    type: "spring", 
                    stiffness: 100 
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              showComingSoon
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1.5 }}
            className="h-[6rem] flex items-center justify-center"
          >
            <h1 className="text-white text-[5rem] tracking-[1.5rem] font-kodchasan">coming soon</h1>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;
