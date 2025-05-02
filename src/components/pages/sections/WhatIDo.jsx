import React from "react";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  // eslint-disable-next-line no-unused-vars
  motion,
} from "motion/react";
import { wrap } from "motion/react";

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

function InfiniteMarquee({ items, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    const moveBy =
      baseVelocity * (delta / 1000) + baseVelocity * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="marquee-container w-full overflow-hidden bg-transparent">
      <motion.div
        className="marquee-content flex justify-center gap-16 py-8 whitespace-nowrap bg-transparent"
        style={{ x }}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`${
              i % 2 === 0 ? "font-black" : "font-light"
            } mx-4 cursor-default text-2xl md:text-4xl text-slate-950 dark:text-slate-400 select-none`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function WhatIDo() {
  return (
    <div className="what-i-do flex flex-col items-center py-8 md:py-24">
      <div className="flex w-full flex-col items-center gap-1 md:gap-3 text-xl font-medium">
        <InfiniteMarquee items={backendSkills} baseVelocity={-2} />
        <InfiniteMarquee items={frontendSkills} baseVelocity={2} />
      </div>
    </div>
  );
}

export default WhatIDo;
