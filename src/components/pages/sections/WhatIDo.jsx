import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const backendSkills = [
  "API Development",
  "Database Design",
  "Microservice Design",
  "Caching Strategies",
  "Test Automation",
  "DevOps",
  "Serverless Architecture",
  "Authentication & Authorization",
  "Application Security",
  "Documentation",
];

const frontendSkills = [
  "UI Development",
  "Responsive Design",
  "Performance Optimization",
  "User Accessibility",
  "UI Testing",
  "Integration Testing",
];

function InfiniteMarquee({ items, reverse = false }) {
  const MarqueeText = () => (
    <span className="">
      {items.map((item, i) => {
        return (
          <span className="not-even:font-light not-odd:font-black px-16" key={`${item} - ${i}`}>
            {item}
          </span>
        );
      })}
    </span>
  );

  return (
    <div className="marquee relative h-12 w-screen max-w-full overflow-x-hidden">
      <motion.div
        className="track py-2 absolute whitespace-nowrap"
        style={{ willChange: "transform" }}
        variants={{
          animate: {
            x: [`${reverse ? "-50%" : "0%"}`, `${reverse ? "0%" : "-50%"}`],
            transition: {
              x: {
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              },
            },
          },
        }}
        animate="animate">
        <MarqueeText />
        <MarqueeText />
      </motion.div>
    </div>
  );
}

function WhatIDo() {
  return (
    <div className="what-i-do flex flex-col items-center pb-12 py-20 md:py-24 dark:text-slate-400" >
      <div className="flex w-full flex-col items-center text-2xl sm:text-4xl font-medium md:gap-3">
        <InfiniteMarquee items={backendSkills} reverse={true}/>
        <InfiniteMarquee items={frontendSkills} />
      </div>
    </div>
  );
}

export default WhatIDo;
