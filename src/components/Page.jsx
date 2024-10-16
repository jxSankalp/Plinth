import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./page.css";
import { Glow } from "../assets/svg";
import {arrow1} from "../assets/svg"
import {arrow2} from "../assets/svg"
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
      <div className="h-screen flex md:mt-[70rem] lg:mt-[35rem] mt-[35rem] flex-col relative">

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pt-8 z-20">

              <div
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                  transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                }}
                className="text-transparent bg-Green-gradient bg-clip-text text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem] font-extrabold font-akira leading-none tracking-[0.5rem] sm:tracking-[1.2rem] md:tracking-[1.7rem] customBreakpoint:mt-[38rem] sm:mt-[30rem] md:mt-[20rem]"
              >
                <div className="overflow-hidden glow1 md:w-[40rem] md:top-[33rem] lg:top-[26rem] lg:w-[60rem] top-[26rem] w-[60rem] h-[65rem] z-10 ">
                  <img src={Glow} alt="Plinth Glow" />
                </div>
                    PLINTH
              </div>

          <div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
            className="xxv-container"
          >
            <h1 className="xxv-text text-[4rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem]">
              {["X", "X", "V"].map((letter, index) => (
                <motion.span
                  key={index}
                  className={`xxv-letter font-extrabold font-akira leading-none xxv-gradient`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={showXXV ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.5,
                    delay: showXXV ? index * 0.2 : 0,
                    type: "spring",
                    stiffness: 100,
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
            className="h-[4rem] sm:h-[5rem] flex items-center justify-center"
          >
            <h1 className="text-white text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] lg:tracking-[2rem] xl:tracking-[2.5rem] 2xl:tracking-[3rem] font-kodchasan">
              COMING SOON

            </h1>
            
          </motion.div>

          <div className=" mt-[2rem] 2xl:mt-[11rem] flex flex-col items-center customBreakpoint:hidden sm:flex ">
              <motion.img
                className=" mt-[0rem]  transform -translate-x-1/2  w-[2rem] "
                src={arrow1}
                alt="Arrow 1"
                animate={{
                  y: [0, -10, 0],  
                }}
                transition={{
                  duration: 1.5,    
                  repeat: Infinity, 
                  repeatType: "loop", 
                }}
              />
              <motion.img
                className="  transform -translate-x-1/2 -translate-y-1/2 w-[2rem] "
                src={arrow2}
                alt="Arrow 2"
                animate={{
                  y: [0, -10, 0],  
                }}
                transition={{
                  duration: 1.5,   
                  repeat: Infinity, 
                  repeatType: "loop", 
                }}
              />
          </div>
          
        </div>

        
        
      </div >


  
</>
  );
};

export default Page;
