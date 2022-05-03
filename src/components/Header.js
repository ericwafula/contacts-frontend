import React from "react";
import { useRef } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

function Header() {
  return (  
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="bg-color_Midnight_Express_DB pl-48 grid grid-cols-2 pt-4 pb-4 pr-48">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-end">
            <ul className="flex flex-row justify-end gap-12 text-2xl">
              <Li text="About" textColor="text-color_Governor_Bay_LLB" />
              <Li text="Contact" textColor="text-color_Governor_Bay_LLB" />
              <Li text="Login" textColor="text-white" />
            </ul>
          </div>
        </div>
      </div>
      {/* tablet */}
      <div className="hidden md:block lg:hidden">
        <div className="bg-color_Midnight_Express_DB pl-12 grid grid-cols-2 pt-4 pb-4 pr-12">
          <div className="w-12">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-end">
            <ul className="flex flex-row justify-end gap-6 text-1xl">
              <Li text="About" textColor="text-color_Governor_Bay_LLB" />
              <Li text="Contact" textColor="text-color_Governor_Bay_LLB" />
              <Li text="Login" textColor="text-white" />
            </ul>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden">
        <div className="bg-color_Midnight_Express_DB pl-4 grid grid-cols-2 pt-4 pb-4 pr-4">
          <div className="w-12">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-end">
            <HiMenuAlt3 size="2.5em" color="white"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

const Li = ({ text, textColor }) => {
  const ref = useRef(null);

  const mouseOver = () => {
    ref.current.style.backgroundColor = "#FFFFFF";
  };

  const mouseOut = () => {
    ref.current.style.backgroundColor = "#0C183C";
  };
  const textStyles = `${textColor} cursor-pointer`;
  return (
    <>
      <li
        className={textStyles}
        onMouseOver={() => mouseOver()}
        onMouseOut={() => mouseOut()}
      >
        {text}
        <div className="flex justify-end">
          <div
            className="w-10 h-1 bg-color_Midnight_Express_DB mt-2"
            ref={ref}
          ></div>
        </div>
      </li>
    </>
  );
};
