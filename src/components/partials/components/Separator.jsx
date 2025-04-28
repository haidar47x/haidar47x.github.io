function Separator({ classes= "" }) {
  const defaults = "h-full border-[0.5px] border-stone-100";
  return (
    <div
      className={`${defaults} ${classes}`}
    ></div>
  );
}

export default Separator;
