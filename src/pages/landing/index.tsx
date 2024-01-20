import Greet from "./components/Greet";
import Projects from "./components/Projects";
// import { Button } from "../../ui/button";
import { Element } from "react-scroll";
import Contact from "./components/Contact";
import Routes from "./components/Routes";
const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 px-24 w-full dark:text-white">
      <div className="flex w-full justify-between ">
        <Greet />
        <Routes />
      </div>
      <Element name="projects">
        <Projects />
      </Element>
      {/* <Button /> */}
      <Element
        name="contact"
        className="w-full"
      >
        <Contact />
      </Element>
    </div>
  );
};

export default Landing;
