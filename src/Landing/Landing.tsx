import Greet from "./Greet";
import Projects from "./Projects";

const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 w-full">
      <Greet />
      <Projects />
    </div>
  );
};

export default Landing;
