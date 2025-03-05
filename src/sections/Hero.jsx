'use client';
import meHero from '../assets/images/meHero.png';
import Image from 'next/image';
import stars from '../assets/images/stars1.png'
import StarIcon from '../assets/icons/star.svg'
import TypingIcon from '../assets/images/typing.png'
import {motion , useScroll, useTransform} from 'framer-motion'
import {React, useRef} from "react";




export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

   
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const translateY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div
    
    id='Home' className='py-20 lg:py-24 w-full relative z-0 mt-10'>
      <div 
        className='absolute inset-0 -z-30 opacity-40'
        style={{ backgroundImage: `url(${stars.src})` }}
      />
      
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
       
        <motion.div 
          className='relative'
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ translateY }}
        >
          <Image 
            src={TypingIcon} 
            className='size-[200px] md:size-[300px] opacity-90 mt-8'
            alt="Typing Icon" 
          />
          
        
        </motion.div>

        
        <motion.div 
         initial="hidden"
         whileInView="visible"
         variants={fadeInUp}
         transition={{ duration: 0.5 }}
        className='max-w-2xl text-center lg:text-left'>
          <motion.h1 
           variants={fadeInUp}
           transition={{ duration: 0.5, delay: 0.3 }}
          className='font-serif text-3xl md:text-4xl lg:text-5xl leading-tight tracking-normal'>
            Hi I'm Nour,
            <br />
            <span className='text-purple-400'>Front-End Developer</span>
          </motion.h1>
          
          <p className="text-gray-300 text-base md:text-lg mt-4 mb-6 max-w-prose mx-auto lg:mx-0">
            With a background in Communication and Electronics Engineering, 
            I bring a unique problem-solving approach to web development.
          </p>

          <motion.div 
           variants={fadeInUp}
           transition={{ duration: 0.5, delay: 0.5 }}
          className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
            <a href='#Projects'>
              <button className='
                inline-flex items-center gap-2
                px-6 py-3 bg-white/5 border border-white/10
                rounded-xl hover:border-purple-400 hover:bg-purple-500/10
                text-sm md:text-base transition-all
              '>
                ⬇️ Explore My Work
              </button>
            </a>
            
            <a href='#Contact'>
              <button className='
                inline-flex items-center gap-2
                px-6 py-3 bg-white/5 border border-white/10
                rounded-xl hover:border-purple-400 hover:bg-purple-500/10
                text-sm md:text-base transition-all
              '>
                👋 Let's Connect
              </button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};