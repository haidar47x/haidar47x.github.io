// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const pages = [
  {
    title: "About",
    href: "/",
    active: true,
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

function PageLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="page-links">
      <div
        className="menu flex items-center justify-center pl-2 hover:text-slate-500 md:hidden"
        onClick={toggleMenu}>
        <FaChevronDown className="" />
      </div>
      {createPortal(
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-10 flex items-center justify-center bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-2xl"
              key="overlay"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}>
              <button
                className="absolute top-5 right-5 text-3xl text-slate-800/60 hover:text-slate-800/90 dark:text-slate-400 dark:hover:text-slate-300 cursor-pointer"
                onClick={toggleMenu}>
                <RxCross1 />
              </button>
              <ul className="flex list-none flex-col gap-4 text-lg text-slate-800 dark:text-slate-300 uppercase">
                {pages.map((p, i) => (
                  <li
                    key={i + 1}
                    className="rounded-lg px-2 py-1 hover:text-slate-500 dark:hover:text-slate-100 duration-100">
                    <Link to={p.href} onClick={toggleMenu}>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}

      <ul className="hidden list-none flex-row md:flex">
        {pages.map((p, i) => {
          return (
            <li
              key={i}
              className="rounded-lg px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-700 duration-100">
              <Link
                to={p.href}
                className={`${p.active && p.active === true ? "" : ""}`}>
                {p.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PageLinks;
