function Separator({ classes= "" }) {
  const defaults = "h-full border-[0.5px] border-slate-100 dark:border-slate-800";
  return (
    <div
      className={`${defaults} ${classes}`}
    ></div>
  );
}

export default Separator;
