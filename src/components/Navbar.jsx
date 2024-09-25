import { PlinthLogo } from "../assets/svg";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-0 w-full text-white flex items-center justify-between h-[4rem] sm:h-[5rem] px-4 sm:px-8 md:px-16 lg:px-20 z-50 bg-transparent">
      <div className="flex items-center">
        <img
          src={PlinthLogo}
          alt="Plinth Logo"
          className="h-[3rem] w-auto sm:h-[4rem] md:h-[5rem] lg:h-[6rem]"
        />
      </div>
    </div>
  );
};

export default Navbar;
