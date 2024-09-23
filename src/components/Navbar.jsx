import { PlinthLogo } from "../assets/svg";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-white flex items-center justify-between h-[5rem] p-[4rem] z-50">
      <div className="flex items-center ">
        <img
          src={PlinthLogo}
          alt="Plinth Logo"
          className="h-[6rem] w-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
