'use client'
import Card from "../components/Card";
import Image from "next/image";
import StarIcon from '../assets/icons/star.png'
import MeImage from '../assets/images/me.jpg'
import GradImage from '../assets/images/grad.png'
import CatImage from '../assets/images/cat.png'

import JavaScriptIcon from '../assets/icons/square-js.svg';
import HtmlIcon from '../assets/icons/html5.svg';
import CssIcon from '../assets/icons/css3.svg';
import ReactIcon from '../assets/icons/react.svg';

import GithubIcon from '../assets/icons/github.svg';
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from 'framer-motion';


const toolboxItems =[
  {
    title:'JavaScript',
    icon :<JavaScriptIcon className='size-10'/>,
  },
  {
    title:'HTML5',
    icon :<HtmlIcon className='size-10'/>,
  },
  {
    title:'CSS3',
    icon :<CssIcon className='size-10'/>,
  },
  {
    title:'React Js',
    icon :<ReactIcon className='size-10'/>,
  },
  
  {
    title:'Next Js',
    icon :<RiNextjsLine className='size-10'/>,
  }
  ,
  {
    title:'Tailwind CSS',
    icon :<RiTailwindCssFill className='size-10'/>,
  },
  {
    title:'Github',
    icon :<GithubIcon className='size-10'/>,
  }
  ,
  {
    title:'Framer-Motion',
    icon :<TbBrandFramerMotion className='size-10'/>,
  }
,
 
  
]

export const AboutSection = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="About" className="py-20">
      <div className="container">
        <motion.div
        
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="heading flex flex-col justify-center items-center gap-4 mt-4">
          <motion.h1
             variants={fadeInUp}
             transition={{ duration: 0.5, delay: 0.3 }}
          className="font-serif lg:text-4xl md:text-4xl text-2xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-purple-600 text-transparent bg-clip-text">
            About Me
          </motion.h1>
          <motion.h3
             variants={fadeInUp}
             transition={{ duration: 0.5, delay: 0.4 }}
          className="font-roboto lg:text-4xl md:text-4xl text-2xl uppercase font-bold tracking-widest text-center">
            A Glimpse Into My World
          </motion.h3>
          <motion.p
             variants={fadeInUp}
             transition={{ duration: 0.5, delay: 0.5 }}
          className="font-serif text-sm font-semibold lg:text-xl md:text-lg sm:text-xl mt-2 text-white/70 text-center">
            Learn more about who I am, what I do, and what inspires me.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
       

      
          <Card className="w-full p-4 h-full">
            <div className="flex gap-4 items-center mb-2 tracking-wide">
              <Image src={StarIcon} alt="StarIcon" className="w-8 h-8" />
              <h1 className="text-xl sm:text-2xl font-serif bg-gradient-to-r from-emerald-300 to-purple-600 text-transparent bg-clip-text">
                Background and Passion
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <h3 className="font-serif text-base flex-1 min-w-0 md:text-lg sm:text-lg mt-4 mb-4">
                From Engineering to Web Development After graduating in Communication and Electronics Engineering, I decided to pursue my passion for web development. I enjoy creating user-friendly experiences and solving problems with code. Currently, I’m focused on expanding my skills and building projects that showcase my abilities in front-end development.
              </h3>
             
            </div>
          </Card>
              {/* Card 2 */}
          <Card className="w-full p-4 h-full">
            <div className="flex gap-4 items-center mb-2 tracking-wide">
              <Image src={StarIcon} alt="StarIcon" className="w-8 h-8" />
              <h1 className="text-xl sm:text-2xl font-serif bg-gradient-to-r from-emerald-300 to-purple-600 text-transparent bg-clip-text">
                Introduction
              </h1>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-between gap-2">
              <h3 className="font-serif text-base flex-1 min-w-0 md:text-lg sm:text-lg mt-4 mb-4">
                Hi, I’m Noor Albaba! I’m a front-end web developer with a background in engineering, specializing in building interactive and visually appealing websites using technologies like HTML, CSS, JavaScript, React, Next js, and Tailwind CSS.
              </h3>
              <Image src={MeImage} className="w-32 h-32 rounded-lg shadow-md shadow-black/50" />
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="w-full p-4 h-full">
            <div className="flex gap-4 items-center mb-2 tracking-wide">
              <Image src={StarIcon} alt="StarIcon" className="w-8 h-8" />
              <h1 className="text-xl sm:text-2xl font-serif bg-gradient-to-r from-emerald-300 to-purple-600 text-transparent bg-clip-text">
                Outside of Coding
              </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
              <h3 className="font-serif text-base md:text-lg sm:text-lg mt-4 mb-4">
                When I’m not coding, I enjoy spending time with my cat and exploring my passion for design and digital drawing, both 2D and 3D. My love for creativity and art influences how I approach web development, helping me create both functional and visually appealing projects.
              </h3>
             
            </div>
          </Card>

          {/* Card 4 */}
          <Card className="w-full p-4 h-full">
            <div>
              <div className="flex gap-4 items-center mb-2 tracking-wide">
                <Image src={StarIcon} alt="StarIcon" className="w-8 h-8" />
                <h1 className="text-xl sm:text-2xl font-serif bg-gradient-to-r from-emerald-300 to-purple-600 text-transparent bg-clip-text">
                  Current Skills <br /> Eager to Learn and Grow
                </h1>
              </div>
              <h3 className="font-serif text-base md:text-lg sm:text-lg mt-4 mb-4">
                Explore the technologies and tools I use to craft exceptional digital experiences.
              </h3>
              <div className="flex flex-col md:flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,5%,95%,transparent)]">
                  <motion.div 
                    className="flex gap-4 py-0.5 w-[max-content]"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ 
                      duration:60,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    {[...toolboxItems, ...toolboxItems, ...toolboxItems].map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        className="flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/30 rounded-lg hover:outline-purple-500 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-emerald-400">{item.icon}</span>
                        <span className="font-semibold">{item.title}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
