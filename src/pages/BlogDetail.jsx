import React from "react";
import { FaClock, FaUser } from "react-icons/fa";

const BlogDetail= () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-10 rounded-xl overflow-hidden flex flex-col mx-auto shadow-lg">
        <a
          href="#"
          className="text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
        >
          The Best Activewear from the Nordstrom Anniversary Sale
        </a>
        <div className="relative">
          <a href="#">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500"
              alt="Sunset in the mountains"
            />
          </a>
          <a
            href="#"
            className="hidden absolute z-10 text-xs bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
          >
            <span className="text-lg">|</span>&nbsp;&nbsp;<span>Cooking</span>
          </a>

          <a
            href="#"
            className="hidden absolute z-10 text-xs bottom-0 right-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out sm:flex items-center"
          >
            <span className="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span>
          </a>
        </div>
        <p className="text-gray-700 py-5 text-base leading-8">
          Machu Picchu is a 15th-century Inca citadel situated on a mountain
          ridge 2,430 metres (7,970 ft) above sea level. It is located in the
          Cusco Region, Urubamba Province, Machupicchu District in Peru, above
          the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco
          and through which the Urubamba River flows.
        </p>
        <div className="py-5 text-sm font-regular text-gray-900 flex">
          <span className="mr-3 flex flex-row items-center">
            <FaClock className="text-indigo-600" />
            <span className="ml-1">6 mins ago</span>
          </span>
          <a href="#" className="flex flex-row items-center hover:text-indigo-600">
            <FaUser className="text-indigo-600" />
            <span className="ml-1">AliSher Azimi</span>
          </a>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default BlogDetail;
