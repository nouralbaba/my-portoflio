"use client";

import  Project1Image from '../assets/images/project1.png';
import  Project2Image from '../assets/images/project2.jpg';
import  Project3Image from '../assets/images/project3.jpg';
import  Project4Image from '../assets/images/project4.jpg';
import  Project5Image from '../assets/images/project5.jpg';
import Image from "next/image";
import { FaExternalLinkAlt , FaGithub } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import {React,useEffect} from 'react';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const portfolioProjects = [
  {
    name: "Tracking Task",
    title: "Dark Saas Landing Page",
    technologies: ["Next.js", "-Tailwind CSS", "-Framer Motion"],
    description: "A sleek and professional SaaS landing page for a startup.",
    features: [
     {title: "Hero section with animated background"},
      {title:"Call-to-action buttons"},
      {title:"SEO-optimized content"},
    ],
    link:'',
    githubLink: "https://github.com/yourusername/saas-landing-page",
    image: Project1Image,
  },
  {
    name: "Tinty Make-up Store",
    title: "E-commerce Website",
    technologies: ["Next.js", "-Tailwind CSS", "-Framer Motion"],
    description: "Tinty Make-up Store is a vibrant e-commerce platform designed for beauty enthusiasts. With a user-friendly interface and a focus on showcasing a wide range of cosmetics, this store offers a seamless shopping experience. Customers can explore products, read reviews, and enjoy an interactive shopping cart that enhances their journey.",
    features: [
      { title: "Users can add and remove items from the cart" },
      { title: "Smooth page transitions with Framer Motion" },
      { title: "Responsive design for all devices" },
    ],
    link: '',
    githubLink: "https://github.com/yourusername/tinty-makeup-store",
    image: Project2Image,
  },
  {
    name: "Swimming Academy",
    title: "Academy Website",
    technologies: ["React ", '-Vite', " -Tailwind CSS", "-Framer Motion"],
    description: "A cat adoption platform where users can view, filter, and apply to adopt cats.",
    features: [
      {title:"Adopt Me button navigates to an adoption form"},
      {title:"Dark mode toggle for better accessibility"},
      {title:"Mobile-friendly layout"},
    ],
    link:'',
    githubLink: "https://github.com/yourusername/saas-landing-page",
    image: Project3Image,
  },
  {
    name: "CRUD Budget Tracker",
    technologies: ["React", " -Tailwind CSS",' -Next Js'],
    title: "CRUD System",
    description: "A modern bakery e-commerce site with an interactive UI and a shopping cart.",
    features: [
      {title:"Users can add and remove items from the cart"},
      {title:"Smooth page transitions with Framer Motion"},
      {title:"Responsive design for all devices"},
    ],
    link:'',
    githubLink: "https://github.com/yourusername/saas-landing-page",
    image: Project4Image,
  },
  {
    name: "Calories Calculater",
    technologies: ["Javascript", "-HTML" ," -CSS"],
    title: "Fitness & Calorie Calculator Website",
    
    description: "A modern bakery e-commerce site with an interactive UI and a shopping cart.",
    features: [
      {title: "Users can add and remove items from the cart"},
     { title: "Smooth page transitions with Framer Motion"},
     { title: "Responsive design for all devices"},
    ],
    link:'',
    githubLink: "https://github.com/yourusername/saas-landing-page",
    image: Project5Image,
  },
];

export const ProjectsSection = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };






  return (
    <section id='projects' className='py-16 lg:py-20 bg-gray-900'>
      <motion.div className='max-w-7xl mx-auto px-4'>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        className='text-center mb-12'>
          <motion.h2 
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          className='font-serif text-4xl md:text-5xl font-semibold mb-4'>
            <span className='bg-gradient-to-r from-emerald-400 to-purple-500 text-transparent bg-clip-text'>
              My Projects
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          className='text-gray-300 text-lg md:text-xl max-w-2xl mx-auto'>
            Explore my latest development creations
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {portfolioProjects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={project.title}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              
                className='
                  rounded-xl overflow-hidden
                  bg-gray-800 border border-gray-700/50
                  hover:border-purple-500/30 transition-all duration-300
                  hover:shadow-lg hover:shadow-purple-900/10
                  flex flex-col
                '
              >
                {/* Image Section */}
                <div className='relative h-48 md:h-56 group'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='
                      object-cover transition-transform duration-500
                      group-hover:scale-105
                    '
                  />
                  <div className='
                    absolute inset-0 bg-gradient-to-t
                    from-gray-900/60 to-transparent
                  '/>
                </div>

                {/* Content Section */}
                <div className='p-6 flex flex-col flex-grow'>
                  <div className='mb-4'>
                    <span className='text-emerald-400 text-sm font-medium'>
                      {project.name}
                    </span>
                    <h3 className='font-serif text-xl md:text-2xl text-gray-100 mt-2 mb-3'>
                      {project.title}
                    </h3>
                  </div>

                  <div className='bg-gray-700/20 rounded-lg p-4 mb-4 flex-grow'>
                    <p className='text-gray-300 text-sm leading-relaxed'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2 mt-3 text-xs text-emerald-400'>
                      {project.technologies}
                    </div>
                  </div>

                  <ul className='space-y-2 mb-4'>
                    {project.features.map((feature) => (
                      <li 
                        key={feature.title}
                        className='flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors text-sm'
                      >
                        <IoMdCheckmarkCircleOutline className='w-4 h-4 text-purple-400 flex-shrink-0' />
                        <span>{feature.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className='flex flex-col gap-3 mt-auto'>
                    <a
                      href={project.link}
                      className='group relative overflow-hidden rounded-lg'
                    >
                      <button className='
                        w-full flex items-center justify-center gap-2
                        px-4 py-3 bg-purple-600/20 hover:bg-purple-600/30
                        border border-purple-500/30 
                        text-gray-100 hover:text-white
                        transition-all duration-300 text-sm
                      '>
                        <FaExternalLinkAlt className='w-4 h-4' />
                        <span>Live Demo</span>
                      </button>
                    </a>

                    <a
                      href={project.githubLink}
                      className='group relative overflow-hidden rounded-lg'
                    >
                      <button className='
                        w-full flex items-center justify-center gap-2
                        px-4 py-3 bg-gray-700/20 hover:bg-gray-700/30
                        border border-gray-600/30 
                        text-gray-100 hover:text-white
                        transition-all duration-300 text-sm
                      '>
                        <FaGithub className='w-4 h-4' />
                        <span>View Code</span>
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};