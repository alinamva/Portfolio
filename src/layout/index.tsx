import { useEffect, useState } from "react";
import Landing from "../Landing/Landing";
import Footer from "../components/Footer";
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
    <div className=" min-h-screen dark:bg-slate-950  ">
      <Header
        handleThemeSwitch={handleThemeSwitch}
        checked={checked}
      />
      <Landing />
      <Footer />
    </div>
  );
};

export default Main;
