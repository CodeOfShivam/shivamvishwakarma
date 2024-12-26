import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  return (
    <>
      <nav className="bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0">
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className="text-xl font-medium text-decoration-none whitespace-nowrap text-white"
            >
              {`SHIVAM VISHWAKARMA`}
            </a>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={"#ffffff"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
