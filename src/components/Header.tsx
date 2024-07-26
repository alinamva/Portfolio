import { Switch } from "@mui/material";

import logo from "/assets/logo.svg";
import logodark from "/assets/logodark.svg";
import { Main } from "../layout";
import { Link } from "react-router-dom";
import SideBar from "./sidebar";
const Header = ({ handleThemeSwitch, checked }: Main) => {
  return (
    <div className="flex items-center justify-between px-6 pt-6 sm:pt-12 sm:px-24 bg-midnight">
      <Link to="/">
        <img
          src={checked ? logodark : logo}
          alt="Logo"
          className="min-w-20"
        />
      </Link>
      <div className="flex items-center justify-end w-full gap-12">
        <Switch
          onChange={handleThemeSwitch}
          defaultChecked={checked}
          color="primary"
        />
        <SideBar checked={checked} />
      </div>
    </div>
  );
};

export default Header;
