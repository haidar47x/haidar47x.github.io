import React from "react";
import gradientImage from "../../assets/gradient.png";
import postsData from "../../assets/posts.json";

const Separator = ({ year }) => (
  <div className="eb-garamond flex w-full items-center justify-center py-4 text-xl sm:text-2xl md:text-3xl">
    <div className="flex-grow border-t border-stone-400"></div>
    <span className="px-4 font-light text-gray-600">{year}</span>
    <div className="flex-grow border-t border-stone-400"></div>
  </div>
);

function Articles() {
  const posts = postsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const dateFormat = Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  let currentYear = new Date(posts[0]?.date).getFullYear();

  return (
    <div className="relative flex flex-col items-center gap-12 overflow-x-hidden px-4 pt-24 pb-4 md:gap-32 md:py-24">
      <img
        src={gradientImage}
        alt="Gradient"
        className="animate-fade absolute top-0 -left-32 -z-10 h-[4/12] w-full overflow-x-hidden opacity-100 sm:w-auto md:-left-60 lg:-left-30 xl:left-40"
      />
      <div className="wrapper flex flex-col items-start gap-12 px-4 sm:px-8 md:gap-24 md:px-12 lg:px-0">
        <h1 className="eb-garamond text-shadow/25 text-5xl text-shadow-xs md:text-8xl">
          articles
        </h1>
        <div className="posts flex flex-col gap-5">
          {posts.map((post, i) => {
            const postYear = new Date(post?.date).getFullYear();
            let printSeparator = null;
            if (postYear !== currentYear) {
              currentYear = postYear;
              printSeparator = true;
            }
            return (
              <React.Fragment key={i}>
                {printSeparator ? (
                  <Separator year={currentYear} className="" />
                ) : null}
                <div className="entry flex flex-col justify-start gap-1 pl-0.5">
                  <div className="eb-garamond text-sm font-semibold text-stone-600 italic md:text-base">
                    <time dateTime={post.date}>
                      {dateFormat.format(new Date(post.date))}
                    </time>
                  </div>
                  <h3 className="text-sm duration-100 hover:text-orange-500 sm:text-base md:text-lg">
                    <a href={post.url} target="_blank">
                      {post.title}
                    </a>
                  </h3>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
