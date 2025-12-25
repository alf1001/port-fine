'use client';
import { useTheme } from '@/app/providers/themeProvider';
import { assets } from "@/assets/assets";
import { motion } from 'motion/react';
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const { isDark } = useTheme();
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending ...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "91eb30d6-6b6a-4dc4-9c33-e231ea21ad58");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setResult(data.success ? "Form Submitted Successfully" : "Error");
  };

  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}

      id="contact"
      className={`w-full max-w-7xl mx-auto px-6 py-10 scroll-mt-20 bg-no-repeat bg-center`}
      style={{ backgroundImage: "url('/footer-bg-color.png')" }}
    >

      <motion.h4
      initial={{y:-20, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.3,duration: 0.5}}
      className={`text-center mb-2 text-lg font-ovo ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        Connect with me
      </motion.h4>

      <motion.h2
      initial={{y:-20, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.5,duration: 0.5}}
      className={`text-center text-5xl font-ovo ${isDark ? 'text-white' : 'text-black'}`}>
        Get in touch
      </motion.h2>

      <motion.p 
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.7,duration: 0.5}}
      className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        I'd love to hear from you!
      </motion.p>

      <motion.form
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.9,duration: 0.5}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
          initial={{opacity:0, x:-50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 0.6, delay:1.1}}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={`
              flex-1 p-3 outline-none border rounded-md 
              ${isDark 
                ? 'bg-[rgba(255,255,255,0.08)] border-gray-600 text-gray-200' 
                : 'bg-white border-gray-400 text-gray-700'}
            `}
          />

          <motion.input
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 0.6, delay:1.2}}
            type="text"
            name="email"
            placeholder="Enter your email"
            required
            className={`
              flex-1 p-3 outline-none border rounded-md 
              ${isDark 
                ? 'bg-[rgba(255,255,255,0.08)] border-gray-600 text-gray-200' 
                : 'bg-white border-gray-400 text-gray-700'}
            `}
          />
        </div>

        <motion.textarea
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.6, delay:1.3}}

          rows={6}
          name="message"
          placeholder="Enter your message"
          required
          className={`
            w-full p-4 outline-none border rounded-md mb-6
            ${isDark 
              ? 'bg-[rgba(255,255,255,0.08)] border-gray-600 text-gray-200' 
              : 'bg-white border-gray-400 text-gray-700'}
          `}
        ></motion.textarea>

        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
          type="submit"
          className={`
            py-3 px-8 w-max mx-auto flex items-center gap-2 rounded-full transition duration-500
            ${isDark ? 'bg-gray-200 text-black hover:bg-white' : 'bg-black/80 text-white hover:bg-black'}
          `}
        >
          Submit now
          <Image
            src={isDark ? assets.right_arrow_bold : assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </motion.button>

        <p className={`mt-4 text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {result}
        </p>
      </motion.form>

    </motion.div>
  );
};

export default Contact;
