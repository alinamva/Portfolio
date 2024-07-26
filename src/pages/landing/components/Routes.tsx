import { Link } from "react-router-dom";

const Routes = () => {
  return (
    <ul className="flex flex-col mr-12 dark:text-white max-w-fit">
      <Link
        to="/"
        className="w-fit"
      >
        <div className="duration-700 group hover:translate-x-4 w-fit ">
          <label className="not-italic group-hover:italic">Home</label>
        </div>
      </Link>
      <Link
        to="projects"
        className="w-fit"
      >
        <div className="duration-700 group hover:translate-x-4 ">
          <label className="not-italic group-hover:italic">Projects</label>
        </div>
      </Link>
      <Link
        to="contact"
        className="w-fit"
      >
        <div className="duration-700 group hover:translate-x-4 ">
          <label className="not-italic group-hover:italic">Contact</label>
        </div>
      </Link>
      <a
        href="https://cvdesignr.com/p/64997801bb3bb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="duration-700 group hover:translate-x-4 ">
          <label className="not-italic group-hover:italic">Resume</label>
        </div>
      </a>
    </ul>
  );
};

export default Routes;
