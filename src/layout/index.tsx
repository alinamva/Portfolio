import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export interface Main {
  checked: boolean;
  handleThemeSwitch: () => void;
}

const Main = () => {
  const [theme, setTheme] = useState("light");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setChecked(!checked);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col min-h-screen gap-12 m-auto text-black md:gap-24 lg:gap-20 max-w-7xl dark:bg-slate-950 dark:text-white">
      <Header
        handleThemeSwitch={handleThemeSwitch}
        checked={checked}
      />
      <Outlet />
    </div>
  );
};

export default Main;
