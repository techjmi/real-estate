import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import FormFooter from "../component/FormFooter";
const Footer = () => {
  return (
    <>
    <div className="bg-black lg:py-10 flex justify-between gap-6 text-white lg:px-10 px-3 py-4 flex-col md:flex-row md:gap-20">
      <div className="left md:w-1/2 w-full">
        <div className="logo flex gap-3 items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Brand Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
          <h1 className="text-4xl font-semibold font-serif">shamim</h1>
        </div>

        <div className="text mt-3">
          <p className="text-slate-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            numquam cum inventore omnis nisi delectus unde facere sit rem
            sapiente, dignissimos ex reiciendis eius tenetur saepe minus!
            Ducimus, natus! Aliquam!
          </p>
        </div>
        <div className="social flex justify-start gap-6 mt-5">
          <a
            href="https://www.facebook.com/profile.php?id=100047398065321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
          >
            <BsFacebook size="1.5em" />
          </a>
          <a
            href="https://www.instagram.com/mernvibes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
          >
            <BsInstagram size="1.5em" />
          </a>
          <a
            href="https://github.com/techjmi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-900 hover:shadow-xl transition duration-300 transform hover:scale-110"
          >
            <BsGithub size="1.5em" />
          </a>
          <a
            href="www.linkedin.com/in/md-shamim-akhter-b12624193"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-300 transform hover:scale-110"
          >
            <BsLinkedin size="1.5em" />
          </a>
        </div>
      </div>

      {/* form part of footer */}
      <div className="right  md:w-1/2 relative self-start w-full">
        <h1 className="font-semibold font-mono">Get in Touch</h1>
        <FormFooter />
      </div>
     
    </div>
     <div className="copyright">
     <p>copyright by md shamim akhter</p>
   </div>
   </>
  );
};

export default Footer;
