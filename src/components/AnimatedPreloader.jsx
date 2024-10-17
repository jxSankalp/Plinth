import ProgressBar from './ProgressBar'; 
import Logo from '../assets/PlinthLogo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 

const AnimatedPreloader = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    const t2 = gsap.timeline({ paused: true });

    const isSmallScreen = window.innerWidth < 840;

    tl.from('#text-1', {
      y: isSmallScreen ? 90 : 90,
      duration: 1,
      ease: 'power2.in',
    });

    tl.to('#text-1', {
      y: isSmallScreen ? -80 : -100,
      duration: 2,
      ease: 'power4.out',
      delay: 0.75,
    }).call(() => t2.play());

    gsap.to('#text-2', {
      y: isSmallScreen ? -60 : -120,
      duration: 2,
      ease: 'power2.in',
      delay: 1.2,
    });

    t2.to('#text-2', {
      y: isSmallScreen ? -160 : -220,
      duration: 1.5,
      ease: 'power2.out',
    });

    tl.to('#text-3', {
      y: isSmallScreen ? -150 : -240,
      duration: 1.75,
      ease: 'power2.out',
    });

    gsap.to('#logo', {
      rotate: 360,
      duration: 2.5,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="flex w-screen h-screen bg-black items-center">
      <div className="flex mx-auto flex-col sm:flex-row items-center sm:items-start">
        <div>
          <img src={Logo} className="size-28 w-[100px] sm:w-[150px]" id="logo" alt="Logo" />
        </div>
        <ProgressBar />
        <div className="h-auto customBreakpoint:h-[6rem] flex flex-col overflow-hidden text-center">
          <h3 className="font-Helvetica text-white text-[3.5rem] sm:text-[5.25rem] font-[300] -mt-2" id="text-1">
            PLINTH
          </h3>
          <h3 className="font-Helvetica text-neon text-[3.5rem] sm:text-[5.25rem] font-[300] lg:ml-8 md:ml-8 -mt-1.2" id="text-2">
            COMING
          </h3>
          <h3 className="font-Helvetica text-white text-[3.5rem] sm:text-[5.25rem] font-[300] -mt-2" id="text-3">
            SOON
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPreloader;
