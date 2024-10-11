import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${
          navbarColor ? 'bg-white text-black z-50' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto md:mx-10 py-1">
        <Link to="/">
  <img src="/logo.jpg" alt="Website Logo" className="w-14 h-14 rounded-full" />
</Link>
        </div>
      </nav>
    );
}

export default Navbar