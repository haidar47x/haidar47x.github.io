import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { BiLogoTypescript } from "react-icons/bi";
import { FaSass} from "react-icons/fa6";
import { PiLighthouse } from "react-icons/pi";
import { SiGithubactions, SiGnubash, SiPython, SiSentry} from "react-icons/si";
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiBearSmileLine, RiNextjsLine, RiVercelLine } from "react-icons/ri"
import { IoLogoElectron } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { SiDatadog } from "react-icons/si";
import { TbBrandD3, TbBrandFramerMotion, TbBrandStorybook, TbBrandThreejs, TbMasksTheater } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { LiaDocker } from "react-icons/lia";

function Toolbelt() {
  const [xOffset] = useState(() => Math.floor(Math.random() * 40));

  const tools = {
    languages: [
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "Python", icon: SiPython },
      { name: "Bash", icon: SiGnubash },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Sass", icon: FaSass },
    ],
    frontend: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Electron", icon: IoLogoElectron },
      { name: "Zustand", icon: RiBearSmileLine },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Framer Motion", icon: TbBrandFramerMotion },
      { name: "D3.js", icon: TbBrandD3 },
      { name: "Three.js", icon: TbBrandThreejs },
      { name: "Figma", icon: FiFigma },
      { name: "Storybook", icon: TbBrandStorybook },
      { name: "Playwright", icon: TbMasksTheater },
      { name: "Jest", icon: SiJest },
    ],
    tools: [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: RiVercelLine },
      { name: "Datadog", icon: SiDatadog },
      { name: "Sentry", icon: SiSentry },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Lighthouse CI", icon: PiLighthouse },
      { name: "Docker", icon: LiaDocker },
    ],
  };

  return (
    <div className="relative flex flex-col items-center overflow-x-hidden gap-16 py-12 md:py-24">
      <h1 className="eb-garamond px-4 text-shadow/25 text-center text-5xl text-shadow-xs md:text-8xl tracking-tight md:tracking-[-2.5px]">
        toolbelt and <em className="text-orange-500 dark:text-orange-300">technologies</em>
      </h1>
      <p className="text-base px-8">I use various tools, but there are several that I trust to get the job at hand done.</p>
      <div className="flex px-4 md:flex-row justify-center md:justify-center w-full gap-8 sm:gap-16 md:gap-24">
        {Object.keys(tools).map((stack) => {
          return (<div key={stack} className="flex flex-col flex-nowrap gap-4 text-xs sm:text-sm md:text-lg">
            {tools[stack].map((t, j) => {
              const Icon = t.icon;
              return (
                <motion.div key={`${stack} - ${j}`} className="flex items-center gap-2 sm:gap-4 tracking-tight"
                  initial={{ opacity: 0, x: xOffset}}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 1.0 }}
                  transition={{ duration: Math.floor(1 + Math.random() * 200)/100, ease: "linear"}}>
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  <span>{t.name}</span>
                </motion.div>
              )
            })}
          </div>)
        })}
      </div>
    </div>
  );
}

export default Toolbelt;
