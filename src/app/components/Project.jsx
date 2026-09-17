
// components/Projects.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/project';
import ProjectCardMobile from './ProjectCardMobile';
import ProjectCard from './ProjectCard';

const INITIAL_PROJECTS = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS);

  return (
    <section
      id="projects"
      className="w-full max-w-7xl px-5 mx-auto py-24 md:px-8 transition-colors overflow-hidden"
    >
      {/* Heading */}
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="text-xs mx-1 font-black tracking-[0.2em] text-[#0057ff]">
            02 / PROJECTS
          </span>

          <h2 className="mt-3 text-5xl sm:text-6xl font-black uppercase leading-[0.85] tracking-[-0.05em] md:text-7xl text-slate-900 dark:text-white transition-colors">
            THINGS I'VE
            <br />
            <span className="text-[#0057ff]">
              BUILT.
            </span>
          </h2>
        </div>
      </div>

      {/* Desktop Project Grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
            >
              
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Project Grid */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-8">
          {visibleProjects.map((project, index) => (
            
              <ProjectCardMobile
              key={index+1}
                project={project}
                index={index}
              />
          
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {projects.length > INITIAL_PROJECTS && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="border-2 sm:border-4 border-slate-900 dark:border-white bg-slate-900 dark:bg-white px-8 py-4 text-xs font-black tracking-[0.15em] text-white dark:text-slate-950 shadow-[6px_6px_0_#0057ff] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#0057ff] cursor-pointer"
          >
            {showAll
              ? '− SHOW LESS'
              : '+ SHOW MORE PROJECTS'}
          </button>
        </div>
      )}
    </section>
  );
}

