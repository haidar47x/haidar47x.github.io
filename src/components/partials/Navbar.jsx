import ConnectLinks from "./components/ConnectLinks";
import PageLinks from "./components/PageLinks";
import Separator from "./components/Separator";
import SocialLinks from "./components/SocialLinks";

function Navbar() {
  return (
    <div className="navbar sticky top-5 z-10 mt-5 flex flex-nowrap items-center justify-center bg-transparent">
      <div className="skeumorphic-borders static flex h-12 items-center justify-center gap-4 rounded-[0.6rem] bg-white/80 px-2 font-light shadow-[0_1px_rgba(0,0,0,0.14)] backdrop-blur-[9.6px] dark:bg-slate-800/75 dark:text-slate-300 dark:shadow-xs/25 tracking-tight">
        <PageLinks />
        <Separator />
        <SocialLinks />
        <Separator />
        <ConnectLinks />
      </div>
    </div>
  );
}

export default Navbar;
