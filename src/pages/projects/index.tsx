import { useRef } from "react";
import { Data } from "../../constants";
import { motion, useInView, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
const Projects = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='w-full  h-2 fixed top-0  bg-[#5889db]  left-0 right-0 origin-[0%]'
      ></motion.div>
      <div className='flex flex-col gap-12 px-48 py-12 '>
        <h2 className='bg-gradient-to-r from-[#5889db] text-center via-[#5889db] font-semibold to-black text-transparent bg-clip-text'>
          Projects
        </h2>
        <div className='grid grid-cols-2 gap-12'>
          {Data.map((p, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);
            return (
              <motion.div
                transition={{ duration: 0.5 }}
                animate={{
                  opacity: isInView ? 1 : 0.5,
                  scale: isInView ? 1 : 0.95,
                }}
                key={index}
                ref={ref}
                className='w-full py-4 border shadow-2xl dark:shadow-3xl rounded-xl '
              >
                <Link to={p.link} target='_blank' rel='noopener noreferrer'>
                  <div className='w-full px-8 py-4'>
                    <img src={p.image} className='duration-200 shadow-xl cursor-pointer hover:scale-105' />
                  </div>
                </Link>
                <div className='flex flex-col gap-4 px-8 py-2'>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className='flex gap-3'>
                    {p.lgs.map((icon, index) => (
                      <img key={index} src={icon} width={20} height={20} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
