'use client';
import { useTheme } from '@/app/providers/themeProvider';
import { assets, workData } from "@/assets/assets";
import { motion } from 'motion/react';
import Image from "next/image";

const Work = () => {
  const { isDark } = useTheme();

  return (
    <motion.div 
    initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration: 1}}
    id="work" className="w-full max-w-7xl mx-auto px-6 py-10 scroll-mt-20">
      
      <motion.h4 
      initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.3,duration: 0.5}}
      className={`text-center mb-2 text-lg font-ovo ${isDark ? "text-gray-200" : "text-gray-700"}`}>
        My portfolio
      </motion.h4>

      <motion.h2
      initial={{y:-20, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.5,duration: 0.5}}
      className={`text-center text-5xl font-ovo ${isDark ? "text-white" : "text-black"}`}>
        My latest work
      </motion.h2>

      <motion.p 
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.7,duration: 0.5}}
      className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        This section is under development. Please check back later for updates on the services I offer.
      </motion.p>

      <motion.div
      initial={{ opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.9,duration: 0.6}}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {workData.map((project, index)=> (
  <a
  key={index}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{duration:0.3}}
      className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      style={{ backgroundImage: `url(${project.bgImage})` }}
    >
      <div
        className={`
          w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 
          flex items-center justify-between duration-500 group-hover:bottom-7

          ${isDark 
            ? "bg-[rgba(0,0,0,0.07)] border border-gray-600"
            : "bg-white border border-gray-300 shadow-md"
          }
        `}
      >
        <div>
          <h2 className={`font-semibold ${isDark ? "text-gray-100" : "text-black"}`}>
            {project.title}
          </h2>
          <p className={`text-sm ${isDark ? "text-white" : "text-gray-700"}`}>
            {project.description}
          </p>
        </div>

        <div
          className={`
            border rounded-full aspect-square flex items-center justify-center transition
            ${isDark
              ? "border-gray-400 bg-[rgba(255,255,255,0.1)] hover:bg-gray-300"
              : "border-black shadow-[2px_2px_0_#000] hover:bg-lime-300"
            }
          `}
        >
          <Image src={assets.send_icon} alt="send icon" className="w-5" />
        </div>
      </div>
    </motion.div>
  </a>
))}

      </motion.div>

      <motion.a
      initial={{ opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:1.1,duration: 0.5}}

        href="#"
        className={`
          w-max flex items-center justify-center gap-2 border rounded-full py-3 px-10 mx-auto my-20
          transition duration-500

          ${isDark
            ? "text-gray-200 border-gray-500 hover:bg-[rgba(255,255,255,0.08)]"
            : "text-gray-700 border-gray-700 hover:bg-(--color-light-hover)"
          }
        `}
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
      </motion.a>
    </motion.div>
  )
}

export default Work;
