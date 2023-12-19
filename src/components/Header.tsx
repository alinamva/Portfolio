import { Switch } from "@mui/material";

import logo from "../assets/logo.svg";
import logodark from "../assets/logodark.svg";
import { Main } from "../layout";
import { Link } from "react-scroll";
const Header = ({ handleThemeSwitch, checked }: Main) => {
  return (
    <div className="py-12 px-24 flex justify-between items-center bg-midnight">
      <img
        src={checked ? logodark : logo}
        alt="Logo"
      />
      <div className="flex gap-12 items-center">
        <ul className="flex gap-12 dark:text-white">
          <li>Home</li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
          >
            <li>Projects</li>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            <li>Contact</li>
          </Link>
          <li>Resume</li>
        </ul>
        <Switch
          onChange={handleThemeSwitch}
          defaultChecked={checked}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Header;
