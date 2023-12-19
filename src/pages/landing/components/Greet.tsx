import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import { Link } from "react-scroll";
const Greet = () => {
  return (
    <div className="flex justify-center flex-col w-1/2 text-center gap-6 ">
      <h1>Hi, I'm Alina Mammadova.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur
        porta rutrum. Vivamus dignissim dui sit amet augue egestas luctus.
        Mauris sollicitudin ipsum eu ipsum tempus convallis. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Sed ac nunc felis. Donec imperdiet, mauris et posuere interdum, orci
        ligula vestibulum velit, vel ullamcorper mauris ex in sapien. Phasellus
        sed mattis eros. Vivamus imperdiet arcu eu nisl hendrerit, nec imperdiet
        purus dictum. Proin ornare elit nunc, at posuere arcu tincidunt id. Nunc
        sodales felis sit amet tincidunt vehicula. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Sed sit amet elit et massa eleifend
        vehicula. Curabitur finibus odio quis lacus pulvinar hendrerit.
      </p>
      <div className="flex gap-6 justify-center items-center">
        <LinkedInIcon />
        <GitHubIcon />
        <Link
          to="contact"
          smooth={true}
          duration={700}
        >
          <Button variant="outlined">Get in touch</Button>
        </Link>
      </div>
    </div>
  );
};

export default Greet;
