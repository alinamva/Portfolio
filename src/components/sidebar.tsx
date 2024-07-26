import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/assets/logo.svg";
import logodark from "/assets/logodark.svg";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { Main } from "../layout";

export default function SideBar({ checked }: Pick<Main, "checked">) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const routes = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
    { name: "Resume", route: "https://cvdesignr.com/p/64997801bb3bb" },
  ];
  console.log(checked);
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        padding: 4,
        gap: 3,
        display: "flex",
        flexDirection: "column",
        color: "customBlue",
      }}
      onClick={toggleDrawer(false)}
    >
      <Link to="/">
        <img
          src={checked ? logodark : logo}
          alt="Logo"
        />
      </Link>
      <List
        sx={{
          gap: 3,
          display: "flex",
          height: "100%",
          flexDirection: "column",
          width: "98%",
          color: "#5889db",
        }}
      >
        {routes.map(({ name, route }) => (
          <Link
            to={route}
            className="w-full p-3 duration-200 rounded-lg cursor-pointer h-fit hover:bg-gray-200 "
            key={name}
          >
            <span
              className="text-xl "
              key={name}
            >
              {name}
            </span>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {isMobile && <MenuIcon onClick={toggleDrawer(true)} />}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
