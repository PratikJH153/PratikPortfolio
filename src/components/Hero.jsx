import { motion } from "framer-motion";
import { styles } from "../styles";
import {FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import { RiCodeLine } from 'react-icons/ri';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
    <div className="absolute inset-0 top-[100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="pb-16 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}
        >
          Hello, I'm <span className="text-[#915EFF]">Pratik</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${styles.heroSubText} mt-4 text-white-100 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium px-4 sm:px-6 lg:px-8`}
        >
          Software developer crafting clean code for impactful solutions.
          Let's collaborate and make a positive change through technology.
          <div className="flex justify-center space-x-8 mt-10">
            <a href="https://twitter.com/JhPratik" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-4xl text-secondary transition-colors hover:text-white cursor-pointer" />
            </a>
            <a href="https://github.com/PratikJH153" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-4xl text-secondary transition-colors hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/pratik-jadhav-b4bb00208/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl text-secondary transition-colors hover:text-white cursor-pointer" />
            </a>
            <a href="https://leetcode.com/user9891K/" target="_blank" rel="noopener noreferrer">
              <RiCodeLine className="text-4xl text-secondary transition-colors hover:text-white cursor-pointer" />
            </a>
          </div>
        </motion.p>
      </div>
    </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
          >
            <div className="w-3 h-3 rounded-full bg-secondary mb-1" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
