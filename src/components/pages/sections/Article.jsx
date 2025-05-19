import React from "react";

export const Separator = ({ year }) => (
  <div className="eb-garamond flex w-full items-center justify-center py-4 text-xl sm:text-2xl md:text-3xl">
    <div className="flex-grow border-t border-slate-500"></div>
    <span className="px-4 font-light text-slate-500">{year}</span>
    <div className="flex-grow border-t border-slate-500"></div>
  </div>
);

const format = (date) => {
  return Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

function Article({ post, separatorYear, printSeparator = false }) {
  return (
    <React.Fragment>
      {printSeparator ? <Separator year={separatorYear} className="" /> : null}
      <div className="entry flex flex-col justify-start gap-1 pl-0.5">
        <div className="eb-garamond text-sm font-semibold text-slate-600 dark:text-slate-300 italic md:text-base">
          <time dateTime={post.date}>{ format(post.date) }</time>
        </div>
        <h3 className="text-sm hover:text-orange-500 hover:dark:text-orange-300 tracking-tight sm:text-base md:text-lg">
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </h3>
      </div>
    </React.Fragment>
  );
}

export default Article;
