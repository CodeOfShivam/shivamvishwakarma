import React, { useContext } from "react";
import {
  frontendTechStack,
  backendTechStack,
  otherTechStack,
} from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="bg-gray-900">
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-white">
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p className={"mt-4 text-xl text-white"}>
              Hi, I'm Shivam, a passionate software developer with 2.5+ years of
              experience in creating robust, user-centric solutions. I
              specialize in crafting seamless digital experiences, from frontend
              design to backend systems. With expertise in MySQL, dynamic web
              development, and proficiency in tools like Tailwind CSS, I thrive
              in turning ideas into scalable applications.
            </p>
            <p className={"mt-4 text-xl text-white"}>
              Beyond coding, I am a problem-solver at heart who loves tackling
              challenges and delivering impactful results.
            </p>
          </motion.div>

          {/* Frontend Techstack */}
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <h5 className={"mt-4 text-2xl text-justify text-white"}>
              Frontend Techstack
            </h5>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {frontendTechStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>

          {/* Backend Tech */}
          <motion.div>
            <h5 className={"mt-4 text-2xl text-justify text-white"}>
              Backend Techstack
            </h5>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {backendTechStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>

          {/* Other Tools */}
          <motion.div>
            <h5 className={"mt-4 text-2xl text-justify text-white"}>
              Other Tools
            </h5>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between">
            {otherTechStack.map((el, index) => (
              <motion.div
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
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
