import pic from "../assets/techfestphoto.jpg";
const Page2 = () => {
  return (
    <div className="w-[90vw] min-h-[100vh] mx-auto ">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        <img
          src={pic}
          alt="Technorion Event"
          className="w-full md:w-1/2 h-auto mt-[3.4rem] rounded-lg shadow-lg"
        />

        <div className="w-full md:w-1/2 p-6 text-left md:text-left bg-white/10 backdrop-blur-lg border border-white/30 rounded-[1.5rem] shadow-lg mt-12 opacity-90">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4 text-center font-akira ">
            Road to Plinth'25
          </h2>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            The future of technology is unfolding now. It’s not just on the
            horizon, it’s woven into the fabric of our present.🚀 QUANTZ ’24 in
            collaboration with TechFest, IIT Bombay, is thrilled to announce the
            “Technorion Elimination Zonals ’24, Jaipur” hosted at LNMIIT.
          </p>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            Prepare for an exciting lineup of events, from coding challenges 🧑‍💻
            to maze-solving competitions🤖.
          </p>
          <p className="mb-4 text-gray-100 text-lg text-left leading-relaxed">
            This is your call to action! 4 thrilling competitions and a massive
            prize pool of 2.5 lakhs INR are still up for grabs. Prove your
            mettle in these ultimate tech battles and earn your spot in the
            grand finales, to be held at IIT Bombay!
          </p>
          <p className="mb-6 text-gray-100 text-lg leading-relaxed">
            📅 Event Date: 20 October 2024 <br />
            📍 Venue: LNMIIT, Jaipur
          </p>
          <div className="flex justify-center">
            <a
              href="https://techtest.org/competitions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out w-60">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
