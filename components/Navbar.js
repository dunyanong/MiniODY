import React, { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-5 mb-12">

    <div className="hidden md:visible md:flex md:justify-between md:mt-3">
    <div className="">
        <ul className="flex items-center">
          <Link legacyBehavior href="/">
            <a className="font-bold text-2xl text-white hover:cursor-pointer">MiniODY</a>          
          </Link>
        </ul>
    </div>

    <div className="md:flex">
        <ul className="flex justify-between gap-5">
        <li>
            <Link href="/" legacyBehavior>
            <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Home</a>
            </Link> 
        </li>
        <li>
            <Link href="/about" legacyBehavior>
            <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">About</a>
            </Link> 
        </li>
        <li>
            <Link legacyBehavior href="/blogs">
            <a className="text-base font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Blogs</a>
            </Link>               
        </li>
        </ul>
    </div>

    </div>

    <div className="flex justify-between md:mt-3 md:hidden">
    <div className="">
        <ul className="flex items-center">
          <Link legacyBehavior href="/">
            <p className="font-bold text-2xl text-white hover:cursor-pointer">MiniODY</p>          
          </Link>
        </ul>
    </div>

    <div className="">            
        <Hamburger />
    </div>
    </div>

    </nav>
);
};

export default Navbar;
