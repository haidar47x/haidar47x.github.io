import gradientImage from "../../../assets/gradient.png";

function Welcome() {
  return (
    <div className="relative flex flex-col items-center gap-12 overflow-x-hidden pt-24 pb-4 md:gap-16 md:py-24">
      <img
        src={gradientImage}
        alt="Gradient"
        className="animate-fade absolute top-0 -right-48 -z-10 h-[80%] w-full overflow-x-hidden opacity-100 sm:h-[100%] sm:w-auto md:-right-60 lg:-right-24 xl:right-12"
      />
      <h1 className="eb-garamond text-shadow/25 text-center text-5xl text-shadow-xs md:text-8xl lg:text-9xl">
        welcome to
        <br />
        the <em className="text-orange-500 dark:text-orange-300">
          maker's
        </em>{" "}
        den
      </h1>
      <div className="mt-2 w-10/12 text-lg tracking-[0.6px] md:w-8/12 md:text-xl lg:w-8/12 lg:text-2xl xl:w-6/12">
        <p>
          I’m Haidar Ali, a software engineer with 5½ years’ experience building
          and deploying robust and user-focused apps that scale.
        </p>
        <p className="mt-4">
          My work revolves around solving real problems with thoughtful design
          and sharp execution. Currently, I’m working on a platform for fiction
          authors to turn their ideas into beautiful art.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
