import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

function MadeBy() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      className="text-neon animate-neon made yellowtail relative flex items-center justify-center py-32 text-3xl text-slate-700 sm:text-4xl md:text-5xl dark:text-slate-600"
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 2 }}>
      Organic Code n' Instinct
    </motion.div>
  );
}

export default MadeBy;
