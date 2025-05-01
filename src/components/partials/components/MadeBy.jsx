import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

function MadeBy() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
      <motion.div className="made yellowtail flex justify-center items-center text-5xl md:text-7xl py-32 text-stone-700"
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 2 }}>Made by Human</motion.div>
  );
}

export default MadeBy;
