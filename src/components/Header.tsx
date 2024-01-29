import { Switch } from "@mui/material";

import logo from "../assets/logo.svg";
import logodark from "../assets/logodark.svg";
import { Main } from "../layout";
import { Link } from "react-router-dom";
const Header = ({ handleThemeSwitch, checked }: Main) => {
  return (
    <div className='flex items-center justify-between px-24 pt-12 bg-midnight'>
      <Link to='/'>
        <img src={checked ? logodark : logo} alt='Logo' />
      </Link>
      <div className='flex items-center gap-12'>
        <Switch onChange={handleThemeSwitch} defaultChecked={checked} color='primary' />
      </div>
    </div>
  );
};

export default Header;
