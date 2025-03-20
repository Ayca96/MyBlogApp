import React from "react";
import { FaGavel, FaUniversity, FaCode, FaBookOpen } from "react-icons/fa";

const steps = [
  {
    title: "Legal Studies in Turkey",
    description: "I studied law in Turkey, which provided me with a strong foundation in legal principles and critical thinking.",
    icon: <FaGavel size={50} className="text-white" />,
  },
  {
    title: "Academic Achievement in Germany",
    description:
      "I successfully passed the TELC C1 Hochschule exam and am currently a student at Hochschule München, specializing in Energy and Building Technology.",
    icon: <FaUniversity size={50} className="text-white" />,
  },
  {
    title: "Fullstack Development Bootcamp",
    description:
      "I participated in an intensive one-year Fullstack Bootcamp, gaining hands-on experience in modern web technologies and application development.",
    icon: <FaCode size={50} className="text-white" />,
  },
  {
    title: "Continuous Learning",
    description:
      "I am constantly improving my skills and currently working on WebRTC and Socket.io to deepen my expertise in real-time web applications.",
    icon: <FaBookOpen size={50} className="text-white" />,
  },
];

const About = () => {
  return (
    <div className="bg-white p-8 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6 text-center">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1676478746783-5a87238e9088?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Change this to your actual profile image URL
            alt="Profile"
            className="rounded-full border-4 border-gray-700 shadow-lg"
            style={{ width: "250px", height: "250px" }} 
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Who Am I?</h2>
          <p className="text-gray-700 mt-2">A brief overview of my journey and expertise.</p>
        </div>

        {/* Steps Section */}
        <div className="mt-16 grid divide-x divide-y divide-gray-300 overflow-hidden rounded-3xl border text-gray-600 border-gray-300 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-peachBeige transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 p-8"
            >
              <div className="relative space-y-6">
                {step.icon}
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-900 transition">{step.title}</h5>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
