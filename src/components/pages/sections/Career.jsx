// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import gradientImage from "../../../assets/gradient.png"
import experience from "../../../assets/experience.json"

function Career() {
  return (
    <div className="relative flex flex-col items-center overflow-x-hidden gap-20 py-12 md:gap-36 md:py-24">
      <h1 className="eb-garamond text-shadow/25 text-center text-5xl text-shadow-xs md:text-8xl tracking-tight md:tracking-[-2.5px]">
        career <em className="text-orange-500 dark:text-orange-300">journey</em>
      </h1>
      <div className="relative w-full max-w-4xl">
        <div className="absolute top-0 left-4 ml-2 h-[calc(98.5%)] md:h-[calc(100%)] w-[2px] bg-orange-500 dark:bg-orange-300 dark:shadow-xs/20 md:left-1/2"></div>
      <img src={gradientImage}
           alt="Gradient"
           className="dial-down overflow-x-hidden absolute -z-10 -right-32 md:-left-60 lg:-left-64 xl:-left-72 top-0 h-[80%] sm:h-[100%] w-full sm:w-auto opacity-50" />
        {experience.map((item, i) => (
          <motion.div
            key={i}
            className={`mb-8 flex w-full items-center dark:text-shadow-md/35 ${
              i % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}>
            <div
              className={`relative mr-8 ml-12 w-11/12 md:ml-12 md:w-[calc(45%-2.5rem)] ${
                i % 2 === 0 ? "md:ml-auto" : "md:mr-auto md:ml-8"
              }`}>
              <h1
                className={`eb-garamond py-1 text-2xl text-slate-800 dark:text-slate-200 dark:text-shadow-2xs md:text-4xl`}>
                {item.year}
              </h1>
              <h4
                className={`font-regular inherit py-1 text-sm text-slate-700 dark:text-slate-200 uppercase md:text-[0.825em] tracking-[-0.2px] md:tracking-tight`}>
                {item.title}
              </h4>
              <h4
                className={`py-1 text-sm font-bold text-slate-600 dark:text-slate-200 tracking-tight`}>
                {item.company}
              </h4>
              <p className={`py-1 text-base text-slate-950 dark:text-slate-100`}>
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 py-2">
                {item.tech.map((t) => {
                  return (<span key={`${item.company} - ${t}`} className="border-2 dark:border-slate-200 border-slate-800 rounded-full px-1.5 text-sm text-slate-800 dark:text-slate-100" >{ t }</span>);
                })}
                </div>
            </div>
            <div className="absolute left-4 ml-2 h-4 w-4 -translate-x-[0.4rem] rounded-full border-2 border-white bg-orange-500 dark:bg-orange-300 shadow-sm/20 glow md:left-1/2 md:ml-2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Career;
