'use client';

import { useTheme } from '@/app/providers/themeProvider';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}>
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.5,delay:0.3}}
      className={`text-center mb-2 text-lg font-ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        Introduction
      </motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration: 0.5,delay:0.5}}
      className={`text-center text-5xl font-ovo ${isDark ? 'text-white' : 'text-black'}`}>
        About Me
      </motion.h2>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
        initial={{opacity:0, scale:0.9}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration: 0.6}} 
      className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
            priority
          />
        </motion.div>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.6, delay:0.8}}
        className="flex-1">
          <p className={`mb-10 max-w-2xl font-ovo ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            I am a data enthusiast and Computer Science undergraduate with a strong passion for transforming data into meaningful insights. I have hands-on experience in data analysis, machine learning, and web development through various internships and academic projects.
          </p>

          <motion.ul
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.8, delay:1}}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                whileHover={{scale:1.05}}
                key={index}
                className={`
                    border-[0.5px] rounded-xl p-6 cursor-pointer transition-transform duration-300

                    ${isDark 
                    ? 'border-gray-600 bg-[rgba(255,255,255,0.03)] hover:translate-y-1 hover:shadow-lg'
                    : 'border-gray-300 bg-white hover:translate-y-1 hover:shadow-[4px_4px_0_#000]'
                    }
                `}
                >

                {/* pilih icon sesuai theme */}
                <div className="w-7 h-7">
                  <Image
                    src={isDark && iconDark ? iconDark : icon}
                    alt={title}
                    width={28}
                    height={28}
                  />
                </div>

                <h3 className={`my-4 font-semibold ${isDark ? 'text-gray-100' : 'text-gray-700'}`}>
                  {title}
                </h3>

                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
          initial={{y:20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:1.3,duration: 0.5}}
          className={`my-6 ${isDark ? 'text-gray-100 font-ovo' : 'text-gray-700 font-ovo'}`}>
            Tools I use
          </motion.h4>

          <motion.ul 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:1.5,duration: 0.6}}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
                <motion.li
                whileHover={{scale:1.1}}
                key={index}
                className={`
                    flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer transition-transform duration-300

                    ${isDark 
                    ? 'border-gray-600 bg-[rgba(255,255,255,0.03)] hover:shadow-lg'
                    : 'border-gray-300 bg-white hover:shadow-[4px_4px_0_#000]'
                    }
                `}
                >

                <Image src={tool} alt={`tool-${index}`} width={28} height={28} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
