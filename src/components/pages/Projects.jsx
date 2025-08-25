// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gradientImage from "../../assets/gradient.png";
import projects from "../../assets/projects.json";

function Projects() {
  return (
    <div className="relative flex flex-col items-center gap-12 overflow-x-hidden px-4 pt-24 pb-4 md:gap-32 md:py-24">
      <img
        src={gradientImage}
        alt="Gradient"
        className="dial-down absolute top-0 -left-32 -z-10 h-[4/12] w-full overflow-x-hidden opacity-100 sm:w-auto md:-left-60 lg:-left-30 xl:left-40"
      />
      <div className="wrapper flex w-full flex-col gap-12 px-4 sm:px-8 md:gap-24 md:px-12 lg:w-10/12 lg:px-0 xl:w-8/12">
        <h1 className="eb-garamond text-shadow/25 text-5xl text-shadow-xs md:text-8xl tracking-tight md:tracking-[-2.5px]">
          things I've <em className="text-orange-500 dark:text-orange-300">built</em>
        </h1>
        <div className="projects flex flex-col gap-20">
          {projects.map((p, i) => {
            return (
              <div key={p.name} className="project flex flex-col gap-4">
                <h1 className="text-xl tracking-tight sm:text-3xl">
                  <a className="hover:text-slate-700 dark:hover:text-slate-300" href={p.url ?? "#"} target="_blank">
                    {p.name}
                  </a>
                </h1>
                <div className="justify-left flex gap-1 sm:gap-2">
                  {p.technologies.map((t, i) => {
                    return (
                      <span
                        key={i}
                        className="text-slate-800 dark:text-slate-100 text-shadow-2xs rounded-full border-2 border-slate-700 dark:border-slate-200 px-1.5 text-xs sm:text-sm">
                        {t}
                      </span>
                    );
                  })}
                </div>
                <div className="order flex flex-col-reverse gap-8 py-4 text-sm sm:flex-row sm:text-base">
                  <div className="description sm:w-1/2 sm:py-2">
                    {p.description.map((desc, i) => {
                      console.log(desc);
                      return (<div className={`${ i > 0 ? "pt-3" : ""}`} key={Math.random().toString()}>{desc }</div>)
                    })}
                  </div>
                  <motion.div
                    className={`cover overflow-hidden rounded-2xl cursor-pointer sm:w-1/2 ${p.img ? "shadow-md/10" : ""}`}
                    whileHover={{ scale: 1.1, y: -4 }}>
                    {p.img ? (
                      <a href={`${p.url ?? "#"}`}><img className=" " src={p.img} /></a>
                    ) : (
                      <div className="flex h-full uppercase items-center justify-center text-3xl font-extralight tracking-tighter text-slate-950 dark:text-slate-500 cursor-default">
                        Coming Soon
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
