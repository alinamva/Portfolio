import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
const Greet = () => {
  return (
    <div className='flex justify-center flex-col w-1/3 h-full   gap-6 '>
      <h1>ALINA MAMMADOVA</h1>
      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur porta rutrum. Vivamus dignissim dui sit
        amet augue egestas luctus.
        <br />
        <br />
        ac ante ipsum primis in faucibus. Sed sit amet elit et massa eleifend vehicula. Curabitur finibus odio quis
        lacus pulvinar hendrerit.
      </article>
      <div className='flex gap-6 justify-center items-center'>
        <LinkedInIcon />
        <GitHubIcon />
        <Link to='contact' smooth={true} duration={700}>
          <Button variant='outlined'>Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Greet;
