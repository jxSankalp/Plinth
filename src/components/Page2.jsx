import { motion } from "framer-motion";
import imagetechfest from "../assets/techfestphoto.jpg";

const Page2 = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const floatingEffect = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="w-[90vw] flex justify-center overflow-hidden min-h-[70vh] mx-auto xsm:mt-[15rem] md:mt-[3rem] lg:mt-[12rem]">
      <div className="flex flex-col uxl:w-[80rem] lg:flex-row md:flex-col items-center md:items-start gap-8">
        
        <motion.img
          src={imagetechfest}
          alt="Technorion Event"
          className="lg:w-[30rem] md:w-[40rem] h-auto rounded-lg shadow-lg xsm:mt-[1rem] md:mt-[6rem] mt-[5rem]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          animate={floatingEffect}
          loading="lazy" 
        />

        <motion.div
          className="w-full uxl:translate-x-[15rem] md:w-full p-6 text-center md:text-left bg-white/10 backdrop-blur-lg border border-white/30 rounded-[1.5rem] shadow-lg mt-12 opacity-90"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 bg-clip-text mb-4 text-center">
            Road to Plinth'25
          </h2>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            The future of technology is unfolding now. It’s not just on the
            horizon, it’s woven into the fabric of our present. QUANTZ ’24 in
            collaboration with TechFest, IIT Bombay, is thrilled to announce the
            “Technorion Elimination Zonals ’24, Jaipur” hosted at LNMIIT.
          </p>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            Prepare for an exciting lineup of events, from coding challenges to
            maze-solving competitions.
          </p>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            This is your call to action! 4 thrilling competitions and a massive
            prize pool of 2.5 lakhs INR are still up for grabs. Prove your mettle
            in these ultimate tech battles and earn your spot in the grand
            finales, to be held at IIT Bombay!
          </p>
          <p className="mb-6 text-gray-100 text-lg leading-relaxed">
            📅 Event Date: 20 October 2024 <br />
            📍 Venue: LNMIIT, Jaipur
          </p>
          <div className="flex justify-center">
            <a
              href="https://techfest.org/competitions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-60">
                Register Now
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page2;
