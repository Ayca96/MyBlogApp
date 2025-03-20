import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import About from "../pages/About";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import Footer from "../components/Footer";
import UserDashboard from "../pages/UserDashboard";
import UpdateProfile from "../pages/UpdateProfile";
import Contact from "../pages/Contact";
import BlogDetail from "../pages/BlogDetail";

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
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogdetail" element={<BlogDetail/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
