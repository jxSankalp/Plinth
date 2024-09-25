import { PlinthLogo } from "../assets/svg";

const Navbar = () => {
  return (
    <div className="fixed top-2 left-0 w-full text-white flex items-center justify-between h-[4rem] sm:h-[5rem] px-4 sm:px-8 md:px-16 lg:px-20 z-50 bg-transparent">
      <div className="flex items-center">
        <img
          src={PlinthLogo}
          alt="Plinth Logo"
          className="h-[3rem] w-auto sm:h-[4rem] md:h-[5rem] lg:h-[6rem]"
        />
      </div>
      <div className="px-[1rem]">
      <a className="px-[2rem]" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfi3vFurGQJFpAWGWFjvGR9tG2omPmWwB0M2XV1oHFicRAv6A/viewform?usp=sf_link">Sponsor Us</a>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3RCof7TSVQChUKjZ0Yjr8BNYvpyDCeyTon09cy3M29EhiIw/viewform?usp=sf_link" target="_blank" >Register </a>
      </div>
      
    </div>
  );
};

export default Navbar;
