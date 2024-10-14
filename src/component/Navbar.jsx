import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  // Change navbar background color on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 flex ${
        navbarColor ? "bg-white text-black z-50" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between w-full relative px-1 md:px-10 py-1 md:py-2">
        <div>
          <Link to="/">
            <img
              src="/logo.jpg"
              alt="Website Logo"
              className="w-14 h-14 rounded-full"
            />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-6 md:gap-8">
          {/* About Route */}
          <Link to="/about" className="cursor-pointer">
            {/* <p className="hover:text-gray-300 transition-colors">About</p> */}
          </Link>

          {/* Service Route */}
          <Link to="/service" className="cursor-pointer">
            {/* <p className="hover:text-gray-300 transition-colors">Service</p> */}
          </Link>

          {/* Contact Button */}
          <a href="#contact" className="cursor-pointer">
            <button
              className= "md:text-lg border-2 border-login-border px-3 py-1 rounded-md text-sm font-medium flex items-center hover:bg-gray-100 hover:text-black transition-colors"
            >
              <IoCallOutline className="mr-2 size-6" />
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
