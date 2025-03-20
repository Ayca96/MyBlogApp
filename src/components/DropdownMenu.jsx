import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
    setIsOpen(false); 
  };

  return (
    <div className="relative">
      {/* Menü toggle butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block p-2 transition-colors duration-300 transform rounded-lg focus:outline-none border-2 border-peachBeige"
      >
        <BsThreeDotsVertical className="w-6 h-6 text-black-900" />
      </button>

      {/* Menü listesi */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 border">
          <NavLink
            to="/login"
            className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
           Login
          </NavLink>
          <button
            onClick={() => handleNavigation("/dashboard")}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
          >
            Dashboard
          </button>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
}
