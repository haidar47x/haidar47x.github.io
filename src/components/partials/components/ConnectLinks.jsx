// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { MdAttachment } from "react-icons/md";

function ConnectLinks() {
  const whileHover = { y: 2 };
  return (
    <div className="flex flex-row justify-center gap-3 md:gap-2 pr-1 md:p-0">
      <motion.button className="rounded-[0.6rem] bg-black/5 dark:bg-[rgba(255,255,255,0.08)] px-2.5 py-1 backdrop-blur-[9.6px]"
                     whileHover={whileHover}>
        <a href="https://www.google.com" className="">
          <span className="hidden md:inline">Resume</span>
          <MdAttachment className="md:hidden" />
        </a>
      </motion.button>
      <motion.button className="rounded-[0.6rem] bg-slate-950 px-2.5 py-1 text-slate-300"
                     whileHover={whileHover}>
        <a href="mailto:haidar47x@gmail.com" className="">
          <span className="hidden md:inline">Contact</span>
          <MdEmail className="md:hidden" />
        </a>
      </motion.button>
    </div>
  );
}

export default ConnectLinks;
