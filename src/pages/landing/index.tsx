import Greet from "./components/Greet";
import Routes from "./components/Routes";
import { useMediaQuery, useTheme } from "@mui/material";
const Landing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 px-6 mt-24 lg:mb-36 sm:px-24 sm:mt-1 dark:text-white">
      <div className="flex flex-col items-end justify-between w-full h-full gap-8 md:flex-row">
        <Greet />
        {!isMobile && <Routes />}
      </div>
    </div>
  );
};

export default Landing;
