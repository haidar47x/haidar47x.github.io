import ConnectLinks from "./components/ConnectLinks";
import PageLinks from "./components/PageLinks";
import Separator from "./components/Separator";
import SocialLinks from "./components/SocialLinks";

function Navbar() {
  return (
    <div className="navbar flex flex-nowrap justify-center items-center mt-4 bg-transparent">
      <div className="navbar-items flex justify-center items-center gap-4 h-12 px-2 bg-white rounded-[0.6rem] shadow-[0_1px_rgba(0,0,0,0.14)]">
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
