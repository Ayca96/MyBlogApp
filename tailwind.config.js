/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyanBlue: "#1CC9DB", 
        skyBlue: "#07B7E8",
        royalPurple: "#7B1FA2", 
        mintGreen: "#10B981" ,
        pastelGreen:"#9FED91",
        peachBeige:"#EDB391",
        softPeach:"#F8DCC3"
      }
    }
  },
  plugins: [],
};
