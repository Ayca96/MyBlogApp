import React, { useState } from "react";

const tabs = [
  { id: "tab1", title: "Sport", content: "Discover how regular physical activity boosts cognitive function, reduces stress, and enhances productivity for developers." },
  { id: "tab2", title: "Health", content: "Explore the best practices for maintaining a healthy lifestyle while coding. From ergonomic desk setups to sleep optimization and stress management." },
  { id: "tab3", title: "Team Work", content: "Effective communication and collaboration are essential in software development. Learn strategies for remote teamwork, agile methodologies." },
  { id: "tab4", title: "Coding", content: "Stay ahead in the tech world with the latest programming trends, coding best practices, and productivity hacks." },
  { id: "tab5", title: "Current Developments", content: "Keep up with the latest advancements in technology and health." }
];

const FeaturedBlogs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 bg-warmBeige rounded-lg shadow-md overflow-hidden mb-10">
      
      {/* Hamburger Menu Button - Mobile Only */}
      <div className="md:hidden flex justify-between items-center p-2 bg-softPeach rounded-t-lg">
        <span className="text-lg font-semibold">Categories</span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Tab Buttons - Responsive */}
      <div className={`md:flex ${menuOpen ? "block" : "hidden"} md:block bg-softPeach p-2 rounded-t-lg`}>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-2 md:space-y-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-black font-semibold border-b-4 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-white bg-peachBeige"
                  : "border-[#C87650] hover:bg-peachBeige"
              } focus:outline-none`}
              onClick={() => {
                setActiveTab(tab.id);
                setMenuOpen(false); // Menüyü kapat
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white shadow-md rounded-lg overflow-hidden">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            <h2 className="text-2xl font-semibold mb-2 text-[#2C3E50]">{tab.title}</h2>
            <p className="text-gray-700">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
