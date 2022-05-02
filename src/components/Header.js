import React from "react";
import { useRef } from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
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
