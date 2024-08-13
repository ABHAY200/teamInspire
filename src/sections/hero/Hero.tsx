import React from "react";
import { motion } from "framer-motion";

import HeroCover from "../../images/heroCover.png";
import { slideIn, textVariant } from "../../utils/motion";

const Hero = () => {
  const titleContainer = () => {
    return (
      <div className="flex w-3/4 flex-col relative mt-60">
      <motion.h1
        variants={textVariant({ delay: 1.1 })}
        className="text-9xl font-bold text-left"
      >
        TEAM INSPIRE
      </motion.h1>
      <motion.div
        variants={textVariant({ delay: 1.2 })}
        className="text-5xl font-bold text-left mt-8 leading-normal w-2/4"
      >
        Free online section for all your financial goals
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="w-60 h-16 bg-gradient-to-r from-primary-green-dark to-primary-green-light text-white font-bold text-lg mt-12"
      >
        Know More
      </motion.button>
      </div>
    );
  };

  const heroCoverImageContainer = () => {
    return (
      <div className="absolute bottom-0 right-0 w-2/4 h-3/4">
        <img src={HeroCover} alt="..." className="w-full h-full" />
      </div>
    );
  };

  const knowMoreContainer = () => {
    return (
      <div className="flex mb-20 flex-col">
        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
        >
          <div className="flex flex-row mt-9">
            <div className="flex flex-col justify-center align-middle mr-10 w-20">
              <div className="font-bold text-4xl">100+</div>
              <div className="pt-3 text-xl text-off-white">Excellent Service</div>
            </div>
            <div className="flex flex-col justify-center align-middle mr-10 w-20">
              <div className="font-bold text-4xl">40+</div>
              <div className="pt-3 text-xl text-off-white">Award winning</div>
            </div>
            <div className="flex flex-col justify-center align-middle mr-10 w-20">
              <div className="font-bold text-4xl">20+</div>
              <div className="pt-3 text-xl text-off-white">Product Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full h-[100vh] bg-hero-pattern bg-cover bg-center flex flex-col justify-between text-white relative overflow-hidden bg-gradient-to-br from-[#353535] via-[#222222] to-[#222222] px-20"
    >
      {titleContainer()}
      {knowMoreContainer()}
      {heroCoverImageContainer()}
    </motion.div>
  );
};

export default Hero;
