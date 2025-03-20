import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaBlog, FaUserEdit, FaPlus, FaCog, FaSignOutAlt } from "react-icons/fa";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">FitFunction</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            {[
              { name: "Recent Blogs", path: "/recent-blogs", icon: <FaBlog className="mr-2" /> },
              { name: "Update Profile", path: "/update-profile", icon: <FaUserEdit className="mr-2" /> },
              { name: "New Blog", path: "/new-blog", icon: <FaPlus className="mr-2" /> },
              { name: "Settings", path: "/settings", icon: <FaCog className="mr-2" /> },
              { name: "Logout", path: "/logout", icon: <FaSignOutAlt className="mr-2" /> },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700 w-full text-left"
              >
                {item.icon} {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4">
          <button className="text-gray-500 focus:outline-none focus:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Welcome to FitFunction Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your profile and content here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;