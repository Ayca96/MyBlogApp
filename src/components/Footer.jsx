import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full max-w-screen-xl px-4 pt-16 mx-auto md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Şirket Bilgileri */}
        <div className="sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              FitFunction
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              FitFunction is a blog dedicated to helping developers maintain a healthy lifestyle
              while coding. Long hours in front of a screen can take a toll on your body and mind,
              but with the right strategies, you can optimize both your code and your health.
            </p>
          </div>
        </div>

        {/* İletişim Bilgileri */}
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:aycakubra1@gmail.com"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              aycakubra1@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>

        {/* Sosyal Medya Bağlantıları */}
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayca-kubra-soruklu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-pink-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>

            {/* Twitter */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-400"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2025 FitFunction. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {["F.A.Q", "Privacy Policy", "Terms & Conditions"].map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
