import { Switch } from "@mui/material";

import logo from "../assets/logo.svg";
import logodark from "../assets/logodark.svg";
import { Main } from "../layout";
const Header = ({ handleThemeSwitch, checked }: Main) => {
  return (
    <div className="pt-12 px-24 flex justify-between items-center bg-midnight">
      <img
        src={checked ? logodark : logo}
        alt="Logo"
      />
      <div className="flex gap-12 items-center">
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
