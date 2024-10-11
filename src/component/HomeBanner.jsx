import React from "react";
import estate from "../assets/real-estate.jpg";
import PropertyList from "./PropertyList";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";

const HomeBanner = () => {
  const variants = {
    hidden: { opacity: 0, x: "-100vw" }, // Initial position (off-screen to the left)
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 30, duration: 5 },
    }, // Slow animation
  };

  return (
    <>
      <div
        className="relative pt-40 flex bg-top bg-no-repeat bg-cover h-[110vh] text-white"
        style={{ backgroundImage: `url(${estate})` }}
      >
        {/* Add a dark overlay to make text more visible */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        {/* Text on top of the background */}
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView="visible"
          variants={variants}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-12 z-20"
        >
          <h1 className="text-6xl max-lg:mx-auto font-semibold max-sm:text-4xl max-w-lg ">
            Discover Most Suitable Property
          </h1>

          <motion.p className="text-xl max-lg:mx-auto max-w-md">
            Our mission is to address matters that are important to individuals
            and communities
          </motion.p>

          {/* Search field with button inside */}
          <div className="flex relative w-full lg:w-1/2">
            <input
              placeholder="Search..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // handleSearch();
                }
              }}
              autoComplete="off"
              id="searchInp"
              className="py-5 pr-16 text-black rounded-md border-none outline-none w-full"
              type="text"
            />
            <Button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none text-black text-sm px-2 py-1 bg-red-600 mr-2" // Positioning and styling the button
              onClick={() => {
                // handleSearch();
              }}
            >
              Search
            </Button>
          </div>
          <div className=" flex mx-auto gap-12">
          <div className="flex flex-col gap-4">
                <h2 className="text-4xl title-font font-bold">19K+</h2>
                <p className="text-lg">Premium houses</p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl title-font font-bold">5000+</h2>
                <p className="text-lg">Premium houses</p>
              </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeBanner;
