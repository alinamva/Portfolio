import Greet from "./components/Greet";
import Routes from "./components/Routes";
const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 px-24 w-full dark:text-white'>
      <div className='flex h-full w-full justify-between items-end  '>
        <Greet />
        <Routes />
      </div>
    </div>
  );
};

export default Landing;
