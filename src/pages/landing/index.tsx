import Greet from "./components/Greet";
import Projects from "./components/Projects";
// import { Button } from "../../ui/button";
import { Element } from "react-scroll";
import Contact from "./components/Contact";
const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center g ap-20 w-full dark:text-white">
      <Greet />
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
