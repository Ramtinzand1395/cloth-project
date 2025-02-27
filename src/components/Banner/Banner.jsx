import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { motion } from "framer-motion";

const textVariants = (delay) => {
  return {
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      y: "-100%",
    },
  };
};
const ImgVariants = (delay) => {
  return {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      scale: 0.6,
    },
  };
};
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <motion.div
            variants={ImgVariants(0.4)}
            initial="hide"
            whileInView="show"
          >
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </motion.div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <motion.h1
              variants={textVariants(0.4)}
              initial="hide"
              whileInView="show"
              className="text-3xl sm:text-4xl font-bold"
            >
              Winter Sale upto 50% Off
            </motion.h1>
            <motion.p
              variants={textVariants(0.6)}
              initial="hide"
              whileInView="show"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </motion.p>
            <div className="flex flex-col gap-4">
              <motion.div
                variants={textVariants(0.8)}
                initial="hide"
                whileInView="show"
                className="flex items-center gap-4"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </motion.div>
              <motion.div
                variants={textVariants(1)}
                initial="hide"
                whileInView="show"
                className="flex items-center gap-4"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </motion.div>
              <motion.div
                variants={textVariants(1.1)}
                initial="hide"
                whileInView="show"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </motion.div>
              <motion.div
                variants={textVariants(1.2)}
                initial="hide"
                whileInView="show"
                className="flex items-center gap-4"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
