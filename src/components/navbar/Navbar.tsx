import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

function Navbar() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  const renderNavItem = ({
    to,
    onclick,
    text,
  }: {
    to: any;
    onclick: any;
    text: String;
  }) => {
    return (
      <li className="pl-16">
        <NavLink
          activeClassName="text-lg font-semibold"
          className="text-lg font-medium text-white"
          to={to}
          onClick={onclick}
        >
          {text}
        </NavLink>
      </li>
    );
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex items-center justify-between align-middle p-5 text-white px-20 h-32 absolute top-0 left-0 w-full z-10"
    >
      <NavLink to="/" className="text-3xl font-bold font-[Poppins]">
        TEAM INSPIRE
      </NavLink>
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-dark-green z-10 flex flex-col items-center justify-center gap-5 transition-transform transform ${
          active ? "translate-x-0" : "translate-x-full"
        } lg:flex lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:gap-0`}
      >
        {renderNavItem({
          to: "/",
          onclick: navToggle,
          text: "Home",
        })}
        {renderNavItem({
          to: "/service",
          onclick: navToggle,
          text: "Service",
        })}
        {renderNavItem({ to: "/team", onclick: navToggle, text: "Our team" })}
        {renderNavItem({ to: "/about", onclick: navToggle, text: "About" })}
        {renderNavItem({
          to: "/contact",
          onclick: navToggle,
          text: "Contact us",
        })}
      </ul>
      <div
        onClick={navToggle}
        className="lg:hidden flex flex-col justify-between w-8 h-6 cursor-pointer z-10"
      >
        <span
          className={`block h-1 bg-white transition-transform ${
            active ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-white transition-opacity ${
            active ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-white transition-transform ${
            active ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>
    </motion.nav>
  );
}

export default Navbar;
