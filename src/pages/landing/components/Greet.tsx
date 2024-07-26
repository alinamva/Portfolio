import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Greet = () => {
  return (
    <div className="flex flex-col w-full lg:text-lg md:text-md justify-center lg:max-w-[400px] h-full gap-6 ">
      <h1>
        I'm&nbsp;
        <span
          className="custom-heading1 dark:text-gray-700"
          data-text="ALINA MAMMADOVA"
        >
          ALINA MAMMADOVA
        </span>
        <span
          className="custom-heading2 dark:text-gray-700"
          data-text="FRONTEND DEVELOPER"
        >
          FRONTEND DEVELOPER
        </span>
      </h1>

      <article>
        I have nearly 1.5 year experience in this field. I have willing with
        learning new technologies not only related with frontend but also
        another IT technologies which are up to date.
        <br />
        <br />I personally believe that I'm able to make a strong communication
        with any team. I can prove myself by my learning speed.
      </article>
      <div className="flex items-center justify-center gap-6">
        <Link to="https://www.linkedin.com/in/alinamamedova/">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/alinamva">
          <GitHubIcon />
        </Link>
        <Link to="/contact">
          <Button variant="outlined">Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Greet;
