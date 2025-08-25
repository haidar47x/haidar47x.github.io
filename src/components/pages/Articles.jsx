import React from "react";
import gradientImage from "../../assets/gradient.png";
import Article from "./sections/Article";
import { posts, firstYear } from '../../utils'

function Articles() {
  let separatorYear = firstYear;
  return (
    <div className="relative flex flex-col items-center gap-12 overflow-x-hidden px-4 pt-24 pb-4 md:gap-32 md:py-24">
      <img
        src={gradientImage}
        alt="Gradient"
        className="dial-down absolute top-0 -left-32 -z-10 h-[4/12] w-full overflow-x-hidden opacity-100 sm:w-auto md:-left-60 lg:-left-30 xl:left-40"
      />
      <div className="wrapper flex flex-col items-start gap-12 px-4 sm:px-8 md:gap-24 md:px-12 lg:px-0">
        <h1 className="eb-garamond text-shadow/25 text-5xl text-shadow-xs md:text-8xl tracking-tight md:tracking-[-2.5px]">
          articles
        </h1>
        <div className="posts flex flex-col gap-5">
          {posts.map((post, i) => {
            const postYear = new Date(post.date).getFullYear();
            let printSeparator = false
            if (postYear !== separatorYear) {
              separatorYear = postYear;
              printSeparator = true;
            }
            return <Article key={i} post={post} separatorYear={separatorYear} printSeparator={printSeparator} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
