import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JavaNotes from "./pages/JavaNotes";
import SQLNotes from "./pages/SQLNotes";
import HtmlCssNotes from "./pages/HtmlCssNotes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleLogin = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("loggedIn", status);
  };

  // Only show sidebar on notes pages
  const showSidebarPaths = ["/java", "/sql", "/htmlcss"];
  const showSidebar = showSidebarPaths.includes(location.pathname) && isLoggedIn;

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Navbar always shown */}
      <Navbar
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
        toggleDark={() => setDarkMode(!darkMode)}
      />

      <div className="d-flex">
        {/* Sidebar only on notes pages */}
        {showSidebar && <Sidebar />}

        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login toggleLogin={toggleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/java"
              element={isLoggedIn ? <JavaNotes /> : <Navigate to="/login" />}
            />
            <Route
              path="/sql"
              element={isLoggedIn ? <SQLNotes /> : <Navigate to="/login" />}
            />
            <Route
              path="/htmlcss"
              element={isLoggedIn ? <HtmlCssNotes /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
