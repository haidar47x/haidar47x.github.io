import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { SiGnubash } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRedis } from "react-icons/si";
import { SiElasticstack } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiBearSmileFill } from "react-icons/ri"
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { FaMasksTheater } from "react-icons/fa6";


function Toolbelt() {
  const [xOffset] = useState(() => Math.floor(Math.random() * 40));

  const tools = {
    languages: [
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "Python", icon: FaPython },
      { name: "Go", icon: FaGolang },
      { name: "SQL", icon: PiFileSqlFill },
      { name: "Bash", icon: SiGnubash },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "Jest", icon: SiJest },
      { name: "Kafka", icon: SiApachekafka },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Elastic Stack", icon: SiElasticstack },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
    ],
    frontend: [
      { name: "React", icon: FaReact },
      { name: "Zustand", icon: RiBearSmileFill },
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Electron", icon: IoLogoElectron },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "Playwright", icon: FaMasksTheater },
    ],
  };

  return (
    <div className="relative flex flex-col items-center overflow-x-hidden gap-16 py-12 md:py-24">
      <h1 className="eb-garamond px-4 text-shadow/25 text-center text-5xl text-shadow-xs md:text-8xl">
        toolbelt and <em className="text-orange-500">technologies</em>
      </h1>
      <p className="text-base px-8">I use various tools, but there are several that I trust to get the job at hand done.</p>
      <div className="flex px-4 md:flex-row justify-center md:justify-center w-full gap-8 sm:gap-16 md:gap-24">
        {Object.keys(tools).map((stack) => {
          return (<div key={stack} className="flex flex-col flex-nowrap gap-4 text-xs sm:text-sm md:text-lg">
            {tools[stack].map((t, j) => {
              const Icon = t.icon;
              return (
                <motion.div key={`${stack} - ${j}`} className="flex items-center gap-2 sm:gap-4"
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
