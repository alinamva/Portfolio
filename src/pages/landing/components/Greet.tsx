import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Greet = () => {
  return (
    <div className='flex flex-col justify-center w-1/3 h-full gap-6 '>
      <h1>
        I'm&nbsp;
        <span className='custom-heading1 dark:text-gray-700' data-text='ALINA MAMMADOVA'>
          ALINA MAMMADOVA
        </span>
        <span className='custom-heading2 dark:text-gray-700' data-text='FRONTEND'>
          FRONTEND
        </span>
      </h1>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur porta rutrum. Vivamus dignissim dui sit
        amet augue egestas luctus.
        <br />
        <br />
        ac ante ipsum primis in faucibus. Sed sit amet elit et massa eleifend vehicula. Curabitur finibus odio quis
        lacus pulvinar hendrerit.
      </article>
      <div className='flex items-center justify-center gap-6'>
        <Link to='https://www.linkedin.com/in/alinamamedova/'>
          <LinkedInIcon />
        </Link>
        <Link to='https://github.com/alinamva'>
          <GitHubIcon />
        </Link>
        <Link to='/contact'>
          <Button variant='outlined'>Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Greet;
