import React, { useState } from "react";

const tabs = [
    {
      id: "tab1",
      title: "Sport",
      content:
        "Discover how regular physical activity boosts cognitive function, reduces stress, and enhances productivity for developers. Learn simple exercises and stretches to keep your body active even during long coding sessions."
    },
    {
      id: "tab2",
      title: "Health",
      content:
        "Explore the best practices for maintaining a healthy lifestyle while coding. From ergonomic desk setups to sleep optimization and stress management, find out how to stay physically and mentally well."
    },
    {
      id: "tab3",
      title: "Team Work",
      content:
        "Effective communication and collaboration are essential in software development. Learn strategies for remote teamwork, agile methodologies, and how to maintain a positive work-life balance in a team environment."
    },
    {
      id: "tab4",
      title: "Coding",
      content:
        "Stay ahead in the tech world with the latest programming trends, coding best practices, and productivity hacks. From AI-driven development to mastering new frameworks, keep your skills sharp."
    },
    {
      id: "tab5",
      title: "Current Developments",
      content:
        "Keep up with the latest advancements in technology and health. Discover how innovations in AI, wearable devices, and digital health are transforming the way we work and live."
    }
  ];
  

const FeaturedBlogs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full mt-20 max-w-xl mx-auto">
      {/* Tab Buttons */}
      <div className="bg-blue-500 p-2 rounded-t-lg">
        <div className="flex justify-center space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-white font-semibold border-b-4 ${
                activeTab === tab.id ? "border-white bg-blue-700" : "border-blue-700 hover:bg-blue-700"
              } focus:outline-none`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700">{tab.title}</h2>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
