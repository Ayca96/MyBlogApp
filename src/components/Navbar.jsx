import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menü Linkleri
  const navLinks = [
    { name: "Blogs", path: "/blog" },
    { name: "New Blog", path: "/register" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold">FitFunction</NavLink>
        <p>Your Body, Your Best Algorithm.</p>
      </div>

      {/* Mobil Menü Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden block text-gray-900 focus:outline-none"
      >
        {isOpen ? (
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        )}
      </button>

      {/* Menü - Mobilde Aç/Kapat */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full`} id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `md:p-4 py-3 px-0 block ${
                      isActive ? "text-purple-700 font-bold" : "hover:text-purple-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {/* Dropdown Menü Burada */}
            <li className="md:p-4 py-3 px-0 block">
              <DropdownMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
