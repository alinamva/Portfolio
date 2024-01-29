import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
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
    <div className='min-h-screen text-black dark:bg-slate-950 dark:text-white'>
      <Header handleThemeSwitch={handleThemeSwitch} checked={checked} />
      <Outlet />
    </div>
  );
};

export default Main;
