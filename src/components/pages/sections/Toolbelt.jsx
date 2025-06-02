import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaJava } from "react-icons/fa6";
import { SiAmazondynamodb,  SiElasticstack, SiGithubactions, SiGnubash, SiGrafana, SiHibernate, SiJunit5, SiPrometheus, SiPython, SiRabbitmq, SiRedis, SiSelenium, SiSentry, SiSpringboot, SiSpringsecurity, SiSwagger} from "react-icons/si";
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { LiaDocker } from "react-icons/lia";
import { BsCupStraw } from "react-icons/bs";
import { HiMiniCube } from "react-icons/hi2";
import { GiDatabase } from "react-icons/gi";

function Toolbelt() {
  const [xOffset] = useState(() => Math.floor(Math.random() * 32));

  const tools = {
    languages: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "Python", icon: SiPython },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "SQL", icon: GiDatabase },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Bash", icon: SiGnubash },
    ],
    libraries: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "MySQL", icon: GrMysql },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "DynamoDB", icon: SiAmazondynamodb },
      { name: "Hibernate", icon: SiHibernate },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "Redis", icon: SiRedis },
      { name: "JUnit", icon: SiJunit5 },
      { name: "Mockito", icon: BsCupStraw },
      { name: "Testcontainers", icon: HiMiniCube },
      { name: "Selenium", icon: SiSelenium },
      { name: "Node.js", icon: FaNodeJs },
      { name: "React", icon: FaReact },
    ],
    tools: [
      { name: "AWS", icon: FaAws },
      { name: "Elastic Stack", icon: SiElasticstack },
      { name: "Grafana", icon: SiGrafana },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Sentry", icon: SiSentry },
      { name: "Swagger", icon: SiSwagger },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: LiaDocker },
      { name: "Git", icon: FaGitAlt },
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
