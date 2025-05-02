import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function ModeToggle() {
  let darkMode = false;
  return darkMode ? (<MdDarkMode />) : (<MdLightMode />)
}

export default ModeToggle;
