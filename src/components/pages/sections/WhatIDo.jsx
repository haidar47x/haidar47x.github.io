import React from "react";
import { motion } from "framer-motion";

const backendSkills = [
  "API Development",
  "Database Design",
  "Performance Optimization",
  "Microservice Design",
  "Caching Strategies",
  "CI/CD Automation",
  "Test Automation",
  "DevOps",
  "Serverless Architecture",
  "Authentication & Authorization",
  "Application Security",
  "Documentation",
];

const frontendSkills = [
  "Frontend Design",
  "UI Development",
  "Responsive Design",
  "Performance Optimization",
  "Cross-Browser Compatiblity",
  "User Accessibility",
  "Desktop Application",
  "State Management",
  "Unit Testing",
  "E2E Testing",
];

function InfiniteMarquee({ items, reverse = false }) {
  const MarqueeText = () => (
    <span className="text-3xl dark:text-slate-400">
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
    <div className="marquee relative h-32 w-screen max-w-full overflow-x-hidden">
      <motion.div
        className="track absolute whitespace-nowrap"
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
    <div className="what-i-do flex flex-col items-center py-8 md:py-24">
      <div className="flex w-full flex-col items-center gap-1 text-xl font-medium md:gap-3">
        <InfiniteMarquee items={frontendSkills} />
        <InfiniteMarquee items={backendSkills} reverse={true}/>
      </div>
    </div>
  );
}

export default WhatIDo;
