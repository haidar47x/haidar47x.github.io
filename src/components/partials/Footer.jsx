import MadeBy from "./components/MadeBy";

function Footer() {
  return (
    <div className="footer flex flex-col justify-end gap-12">
      <MadeBy />
      <div className="copyright flex justify-center items-center text-sm text-slate-400 dark:text-slate-600 py-4 tracking-tight">
        &copy; 2025 Haidar Ali
      </div>
    </div>
  );
}

export default Footer;
