import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menü toggle butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 block p-2 transition-colors duration-300 transform rounded-lg focus:outline-none border-2 border-blue-500"
      >
        <BsThreeDotsVertical className="w-6 h-6 text-blue-500" />
      </button>

      {/* Menü listesi */}
      {isOpen && (
        <div className="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800 border">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            small <span className="text-gray-600 dark:text-gray-400">(640x426)</span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            medium <span className="text-gray-600 dark:text-gray-400">(1920x1280)</span>
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            large <span className="text-gray-600 dark:text-gray-400">(2400x1600)</span>
          </a>
        </div>
      )}
    </div>
  );
}
