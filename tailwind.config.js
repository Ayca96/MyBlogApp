/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        myBlue1: "#1CC9DB", 
        myBlue2: "#07B7E8",
        myPurple: "#7B1FA2", 
        myGreen1: "#10B981" ,
        myGreen2:"#9FED91"
      }
    }
  },
  plugins: [],
};
