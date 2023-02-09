import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 pt-4 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <p className="font-bold text-2xl text-white visible">
            MiniODY
          </p>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-auto text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
			<div className={`hidden md:block ${isOpen ? "block" : "hidden"}`} id="navbar-default">
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">About</a>
                </li>                
            </ul>
				</div>
        <div className={`block md:hidden ${isOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                <a href="" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page" onClick={handleToggle}>Home</a>
                </li>
                <li>
                <a href="" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page" onClick={handleToggle}>About Us</a>
                </li>
            </ul>
        </div>
  </div>
</nav>
);
};

export default Navbar;