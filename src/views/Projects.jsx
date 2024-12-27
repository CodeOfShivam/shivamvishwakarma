import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image when a new project is selected
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.image.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.image.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div id="projects" className={"bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {/* Project Cards */}
          {projects.map((el, index) => (
            <motion.div
              key={index}
              initial={"hidden"}
              whileInView={"visible"}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
            >
              <a>
                <img
                  className="rounded-t-lg w-full h-[300px] object-cover"
                  src={el.img}
                  alt={el.name}
                />
              </a>
              <div className="p-5">
                <a href="#!">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.desc}
                </p>
                <button
                  onClick={() => openModal(el)}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}

          {/* Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white max-h-full overflow-y-auto rounded-lg shadow-lg max-w-4xl w-full p-6 m-6 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  {selectedProject.name}
                </h2>
                <div className="relative">
                  <img
                    src={selectedProject.image[currentImageIndex]}
                    alt={`${selectedProject.name} Image`}
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                  >
                    ▶
                  </button>
                </div>

                {/* Modal Content with Scroll */}
                <div className=" mt-4">
                  <p className="text-gray-700">{selectedProject.desc}</p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900">Features:</h3>
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: selectedProject.feature,
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900">Tech Stack:</h3>
                    <ul className="list-disc pl-5">
                      {selectedProject.techStack.map((tech, idx) => (
                        <li key={idx} className="text-gray-700">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900">Role:</h3>
                    <p className="text-gray-700">{selectedProject.role}</p>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <a
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none mx-auto mt-4"
          href="#"
        >
          Many More
        </a>
      </div>
    </div>
  );
};

export default Projects;
