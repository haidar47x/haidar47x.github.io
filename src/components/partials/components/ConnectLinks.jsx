function ConnectLinks() {
  return (
    <div className="flex flex-row justify-center gap-2">
      <button className="bg-gray-200 px-2.5 py-1 rounded-[0.6rem]">
        <a href="https://www.google.com" className="">Resume</a>
      </button>
      <button className="text-gray-200 bg-gray-950 px-2.5 py-1 rounded-[0.6rem]">
        <a href="mailto:haidar47x@gmail.com" className="">Contact</a>
      </button>
    </div>
  );
}

export default ConnectLinks;
