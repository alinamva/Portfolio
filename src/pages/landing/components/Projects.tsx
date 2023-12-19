import { Data } from "../../../constants";
// import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="p-48 flex flex-col gap-12 ">
      <h2 className="bg-gradient-to-r from-[#5889db] text-center via-[#5889db] font-bold to-black text-transparent bg-clip-text">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {Data.map((p, index) => {
          return (
            <div
              key={index}
              className="w-full shadow-2xl rounded-xl py-4 border "
            >
              {/* <Link to={p.link}> */}
              <div className="w-full px-8 py-4">
                <img
                  src={p.image}
                  className="cursor-pointer hover:scale-105 duration-200 shadow-xl"
                />
              </div>
              {/* </Link> */}
              <div className="px-8 py-2 gap-4 flex flex-col">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="flex gap-3">
                  {p.lgs.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
