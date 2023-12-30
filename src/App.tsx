import Main from "./layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-full bg-[#5889db] h-2 fixed top-0 left-0 right-0 origin-[0%]"
      ></motion.div>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
