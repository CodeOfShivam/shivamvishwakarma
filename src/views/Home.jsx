import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
const Home = () => {
  const handleClick = () => {
    const resumeUrl =
      "./shivam-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Resume.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${cloud}'`,
          backgroundSize: "cover",
        }}
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left ">
            <div className="flex md:justify-start mb-7 mt-7">
              <div class="relative flex items-center justify-center">
                <h2 class="text-4xl font-bold text-gray-800">
                  <span class="relative bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    2.5+ Years Experience
                    <span class="absolute -z-10 left-0 right-0 -bottom-1.5 -top-1 rounded-full bg-yellow-300 opacity-75 -rotate-2"></span>
                  </span>
                </h2>
              </div>
            </div>
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span className={" text-white"}>
                Hi, I am Shivam
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Back End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Frontend Developer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am a Back-End / Full-Stack Developer. I am currently working at
              Backend Technologies as a Full-Stack Developer
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <button
                  onClick={handleClick}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
