import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import About from "../pages/About";
import Login from "../pages/Login";
import Blog from "../pages/Blog";

const AppRouter = () => {
  return (
    <Router> 
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
