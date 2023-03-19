import React, { useState } from "react";
import img from "../img/Vector.png";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Nav() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Place to stay", link: "/" },
    { name: "NFTs", link: "/" },
    { name: "Community", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className={` w-full fixed top-0 left-0 bg-slate-100 `}>
      <header className="md:flex items-center justify-between md:p-12 p-8 ">
        <div className="flex flex-row text-center content-center">
          <img src={img} alt="house" className="md:h-[4rem] h-10" />
          <span className="font-extrabold text-transparent md:text-7xl text-5xl bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            Metabnb
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
        >
          {open ? <GrClose /> : <FiMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static  md:z-auto z-0   right-0 w-60 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px] "
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className=" md:ml-8 md:text-2xl md:my-0 my-4">
              <a href={link.link} className="hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Button>Connect wallet </Button>
      </header>
    </div>
  );
}

export default Nav;
