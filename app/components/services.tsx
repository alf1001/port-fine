'use client';

import { useTheme } from '@/app/providers/themeProvider';
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Services = () => {
  const { isDark } = useTheme();

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    id="services" className="w-full max-w-7xl mx-auto px-6 py-10 scroll-mt-20">
      
      <motion.h4
      initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.3,duration: 0.5}}
        className={`text-center mb-2 text-lg font-ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
      >
        What I offer
      </motion.h4>

      <motion.h2
      initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.5,duration: 0.5}}
        className={`text-center text-5xl font-ovo ${isDark ? 'text-white' : 'text-black'}`}
      >
        My Services
      </motion.h2>

      <motion.p
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.7,duration: 0.5}}
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo 
        ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
      >
        This section is under development. Please check back later for updates on the services I offer.
      </motion.p>

      {/* GRID */}
      <motion.div 
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.9,duration: 0.6}}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.article
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`
              relative z-10 flex flex-col items-start rounded-lg px-6 py-8 
              cursor-pointer transition-transform duration-300

              ${isDark 
                ? 'border border-gray-600 bg-[rgba(255,255,255,0.05)] hover:translate-y-1 hover:shadow-lg'
                : 'border border-gray-300 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0_#000]'
              }
            `}
          >
            <div className="mb-4">
              <Image
                src={icon}
                alt={title}
                width={40}
                height={40}
              />
            </div>

            <h3 className={`text-lg my-2 ${isDark ? 'text-gray-100' : 'text-gray-700'}`}>
              {title}
            </h3>

            <p className={`text-sm leading-5 flex-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>

            <a
              href={link}
              className={`flex items-center gap-2 text-sm mt-4 
              ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Read more
              <Image src={assets.right_arrow} alt="arrow" width={16} height={16} />
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services;
