import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaJava } from "react-icons/fa6";
import { SiAmazondynamodb,  SiDjango,  SiElasticstack, SiGithubactions, SiGnubash, SiGrafana, SiHibernate, SiJunit5, SiNestjs, SiPrometheus, SiPython, SiRabbitmq, SiRedis, SiSelenium, SiSentry, SiSpringboot, SiSpringsecurity, SiSwagger} from "react-icons/si";
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
    { name: "Node.js", icon: FaNodeJs },
    { name: "NestJS", icon: SiNestjs },
    { name: "Django", icon: SiDjango },
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

function Toolbelt() {
  const [xOffset] = useState(() => Math.floor(Math.random() * 24));

  return (
    <div className="relative flex flex-col items-center gap-16 overflow-x-hidden py-12 md:py-24">
      <h1 className="eb-garamond text-shadow/25 px-4 text-center text-5xl tracking-tight text-shadow-xs md:text-8xl md:tracking-[-2.5px]">
        toolbelt and{" "}
        <em className="text-orange-500 dark:text-orange-300">technologies</em>
      </h1>
      <p className="px-8 text-base">
        I use various tools, but there are several that I trust to get the job
        at hand done.
      </p>
      <div className="flex w-full justify-center gap-8 px-4 sm:gap-16 md:flex-row md:justify-center md:gap-24">
        {Object.keys(tools).map((stack) => {
          return (
            <div
              key={stack}
              className="flex flex-col flex-nowrap gap-4 text-xs sm:text-sm md:text-lg">
              {tools[stack].map((t, j) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={`${stack} - ${j}`}
                    className="flex items-center gap-2 tracking-tight sm:gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 1.0 }}
                    transition={{
                      duration: Math.floor(1 + Math.random() * 200) / 100,
                      ease: "linear",
                    }}>
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    <span>{t.name}</span>
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toolbelt;
