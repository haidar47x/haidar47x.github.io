import socials from "../../../assets/socials.json"

/** Social Icons */
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaDiscord } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const icons = {
  "discord": FaDiscord,
  "github": FaGithub,
  "linkedin": FaLinkedin,
  "whatsapp": IoLogoWhatsapp,
  "email": MdEmail
}

function SocialLinks() {
  return (
    <div className="">
      <ul className="list-none flex flex-row gap-4">
        {socials.map((s, i) => {
          const IconComponent = icons[s.name.toLowerCase()];
          return (
            <li key={i} className="hover:animate-spin cursor-pointer">
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {IconComponent && <IconComponent className="w-5 h-5" />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
