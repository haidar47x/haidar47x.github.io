import MadeBy from "./components/MadeBy";

function Footer() {
  return (
    <div className="footer flex flex-col justify-end gap-12">
      <MadeBy />
      <div className="copyright flex justify-center items-center text-sm text-stone-400 py-4">
        &copy; 2025 Haidar Ali
      </div>
    </div>
  );
}

export default Footer;
