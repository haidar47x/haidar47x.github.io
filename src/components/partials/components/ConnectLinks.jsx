// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MdAttachment } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";

function ConnectLinks() {
  const whileHover = { y: 1, x: 1 };
  return (
    <div className="flex flex-row justify-center gap-3 md:gap-2 pr-1 md:p-0">
      <motion.button className="rounded-[0.6rem] shadow-md bg-black/5 dark:bg-[rgba(255,255,255,0.08)] px-2.5 py-1 backdrop-blur-[9.6px] border-t-slate-500/60 border-1 border-slate-700"
                     whileHover={whileHover}>
        <a href="https://www.overleaf.com/download/project/689382fa5ba48dcc612e711b/build/1988a330e97-b6658cf26a46c301/output/output.pdf?compileGroup=standard&clsiserverid=clsi-reg-n2d-c-f-ljl3&enable_pdf_caching=true&popupDownload=false" target="_blank">
          <span className="hidden md:inline">Resume</span>
          <MdAttachment className="md:hidden" />
        </a>
      </motion.button>
      <motion.button className="rounded-[0.6rem] shadow-md bg-slate-700 px-2.5 py-1 text-slate-300 border-t-1 border-t-slate-500/60 border-1 border-slate-700/75"
                     whileHover={whileHover}>
        <a href="https://calendly.com/haidar47x/30min" className="">
          <span className="hidden md:inline">Let's talk</span>
          <SiGooglemeet className="md:hidden" />
        </a>
      </motion.button>
    </div>
  );
}

export default ConnectLinks;
