import Greet from "./components/Greet";
import Routes from "./components/Routes";
const Landing = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-20 px-24 dark:text-white'>
      <div className='flex items-end justify-between w-full h-full '>
        <Greet />
        <Routes />
      </div>
    </div>
  );
};

export default Landing;
