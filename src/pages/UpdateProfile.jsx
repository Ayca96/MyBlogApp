import React, { useState } from "react";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Developer",
    organization: "Estep Bilişim",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    profilePicture: "https://i.pravatar.cc/300"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between mb-5 items-start">
          <h2 className="mb-5 text-4xl font-bold text-blue-900">Update Profile</h2>
          <div className="text-center">
            <img src={profile.profilePicture} alt="Profile" className="rounded-full w-32 h-32 mx-auto border-4 border-indigo-800 mb-4 transition-transform duration-300 hover:scale-105 ring ring-gray-300" />
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300 ring ring-gray-300 hover:ring-indigo-300">
              Change Profile Picture
            </button>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.title} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input type="text" id="organization" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.organization} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.phone} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" id="location" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={profile.location} onChange={handleChange} />
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
