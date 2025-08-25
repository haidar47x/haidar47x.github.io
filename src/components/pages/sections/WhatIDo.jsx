import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  "API Design",
  "Backend Development",
  "Scalability",
  "Performance Optimization",
  "Microservices",
  "Database Design",
  "Test Automation",
  "Caching",
  "CI/CD Workflows",
  "Documentation",
  "Technical Writing",
];

function InfiniteMarquee({ items, reverse = false }) {
  const MarqueeText = () => (
    <span className="inline-block overflow-y-hidden py-1">
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
    <div className="marquee relative h-16 w-screen max-w-full overflow-x-hidden">
      <motion.div
        className="track absolute whitespace-nowrap tracking-tight"
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
    <div className="what-i-do flex flex-col items-center pb-12 py-20 md:py-24 text-slate-700 dark:text-slate-500" >
      <div className="flex w-full flex-col items-center text-2xl sm:text-4xl font-medium md:gap-3">
        <InfiniteMarquee items={skills} />
      </div>
    </div>
  );
}

export default WhatIDo;
