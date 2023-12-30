import { useEffect, useState } from "react";
import Landing from "../pages/landing";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Element } from "react-scroll";
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
    <div className="min-h-screen dark:bg-slate-950  ">
      <Header
        handleThemeSwitch={handleThemeSwitch}
        checked={checked}
      />
      <Landing />
      <Element name="contact">
        <Footer />
      </Element>
    </div>
  );
};

export default Main;
