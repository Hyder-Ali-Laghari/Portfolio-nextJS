'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/project';

const INITIAL_PROJECTS = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECTS);

  return (
    <section
      id="projects"
      className="  mx-auto w-full max-w-7xl px-5 py-24 md:px-8"
    >

      {/* Heading */}
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

        <div>
          <span className="text-xs font-black tracking-[0.2em] text-[#0057ff]">
            02 / PROJECTS
          </span>

          <h2 className="mt-3 text-6xl font-black uppercase leading-[0.8] tracking-[-0.05em] md:text-7xl">
            THINGS I'VE
            <br />
            <span className="text-[#0057ff]">
              BUILT.
            </span>
          </h2>
        </div>

        {/* <p className="max-w-sm text-sm leading-relaxed text-white/60">
          A collection of projects I've built while
          learning, experimenting and breaking things.
        </p> */}

      </div>


      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>


      {/* Show More */}
      {projects.length > INITIAL_PROJECTS && (
        <div className="mt-14 flex justify-center">

          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="border-4 border-black bg-black px-8 py-4 text-xs font-black tracking-[0.15em] text-[#f5f5f0] shadow-[6px_6px_0_#0057ff] transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#0057ff]"
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