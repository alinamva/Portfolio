import { Link } from "react-scroll";

const Routes = () => {
  return (
    <div className="flex gap-12 ">
      <ul className="flex flex-col  dark:text-white ">
        <Link to="/">
          <div className="group hover:translate-x-4 duration-700 ">
            <label className=" not-italic group-hover:italic ">Home</label>
          </div>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
        >
          <div className="group hover:translate-x-4 duration-700 ">
            <label className=" not-italic group-hover:italic ">Projects</label>
          </div>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
        >
          <div className="group hover:translate-x-4 duration-700 ">
            <label className=" not-italic group-hover:italic ">Contact</label>
          </div>
        </Link>
        <div className="group hover:translate-x-4 duration-700 ">
          <label className=" not-italic group-hover:italic ">Resume</label>
        </div>
      </ul>
    </div>
  );
};

export default Routes;
