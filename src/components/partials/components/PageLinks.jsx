const pages = [
  {
    title: "About",
    href: "#about",
    active: true,
  },
  {
    title: "Posts",
    href: "#posts",
  },
  {
    title: "Projects",
    href: "#projects",
  },
]

function PageLinks() {
  return (
    <div className="page-links">
      <ul className="list-none flex flex-row">
        {pages.map((p, i) => {
          return (<li key={i} className="px-2 py-1 hover:bg-gray-200 duration-200 rounded-lg">
            <a href={p.href} className={`${p.active && p.active === true ? "": ""}`}>
              {p.title}
            </a>
          </li>);
        })}
      </ul>
    </div>
  );
}

export default PageLinks;
