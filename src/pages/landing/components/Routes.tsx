import { Link } from "react-router-dom";

const Routes = () => {
  return (
    <div className='flex gap-12 '>
      <ul className='flex flex-col  dark:text-white '>
        <Link to='/'>
          <div className='group hover:translate-x-4 duration-700 '>
            <label className=' not-italic group-hover:italic '>Home</label>
          </div>
        </Link>
        <Link to='projects'>
          <div className='group hover:translate-x-4 duration-700 '>
            <label className=' not-italic group-hover:italic '>Projects</label>
          </div>
        </Link>
        <Link to='contact'>
          <div className='group hover:translate-x-4 duration-700 '>
            <label className=' not-italic group-hover:italic '>Contact</label>
          </div>
        </Link>
        <a href='https://cvdesignr.com/p/64997801bb3bb' target='_blank' rel='noopener noreferrer'>
          <div className='group hover:translate-x-4 duration-700 '>
            <label className=' not-italic group-hover:italic '>Resume</label>
          </div>
        </a>
      </ul>
    </div>
  );
};

export default Routes;
