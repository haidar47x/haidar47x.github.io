function Welcome() {
  return (
    <div className="header flex flex-col items-center py-24 lg:gap-24 md:gap-20 sm:gap-12 gap-8">
      <h1 className="eb-garamond text-shadow-xs text-center lg:text-7xl md:text-6xl sm:text-5xl text-5xl">
        welcome to
        <br />
        the <em class="text-orange-500">maker's</em> den
      </h1>
      <div className="w-4/12 flex flex-col gap-3 text-xl">
        <p>
          I’m Haidar Ali, a software engineer with 5½ years’ experience building
          and deploying robust and user-focused apps that scale.
        </p>
        <p>
          My work revolves around solving real problems with thoughtful design
          and sharp execution. Currently, I’m working on a platform for
          fictional authors to turn their ideas into beautiful art.
        </p>
      </div>
    </div>
  );
}


export default Welcome;
