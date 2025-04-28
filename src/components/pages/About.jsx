import React from "react";
import { motion } from "motion/react";
import Welcome from "./sections/Welcome";

function About() {
  return (
    <React.Fragment>
      <Welcome />
      <div className="header flex flex-col items-center lg:gap-24 md:gap-20 sm:gap-12 gap-8">
        <h1 className="eb-garamond text-shadow-xs text-center lg:text-7xl md:text-6xl sm:text-5xl text-5xl">
          what I <em class="text-orange-500">do</em>
        </h1>
        <div className="w-full flex flex-col items-center gap-3 font-medium text-xl">
          <div className="marquee-container bg-white overflow-hidden w-full">
            <motion.div
              className="marquee-content flex whitespace-nowrap"
              animate={{ x: ["100%", "-100%"]}}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }}
            >
            </motion.div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
