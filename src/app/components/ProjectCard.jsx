'use client';

import Image from 'next/image';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (

<div className="group overflow-hidden border-4 border-black bg-[#f5f5f0] text-black shadow-[7px_7px_0_#0a0a0a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[11px_11px_0_#0057ff]">

      {/* Project Preview */}
      <div className="relative h-52 overflow-hidden border-b-4 border-black bg-[#050610]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Project number */}
        <div className="pointer-events-none absolute -bottom-4 right-2 text-[6rem] font-black leading-none text-white/10">
          #{String(project.id).padStart(2, '0')}
        </div>
      </div>

      {/* Project Info */}
      <div className="px-5 pt-5">
        <div className="mb-1 text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-neutral-400">
          PROJECT / {String(project.id).padStart(2, '0')}
        </div>

        <h3 className="mb-3 text-3xl font-black uppercase leading-[0.9] tracking-tight">
          {project.title}
        </h3>

        <p className="border-l-4 border-[#0057ff] pl-3 text-sm leading-relaxed text-neutral-700">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-5 flex items-center gap-2 border-t-[3px] border-black px-5 py-3">
        {project.technologies.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            className="flex h-9 w-9 items-center justify-center border-2 border-black bg-black text-[0.6rem] font-black text-[#f5f5f0] transition-colors duration-150 hover:bg-[#0057ff]"
          >
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 border-t-[3px] border-black">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-r-[3px] border-[#f5f5f0] bg-black px-3 py-3 text-center text-[0.65rem] font-black tracking-[0.15em] text-[#f5f5f0] transition-colors hover:bg-[#0057ff]"
        >
          LIVE ↗
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black px-3 py-3 text-center text-[0.65rem] font-black tracking-[0.15em] text-[#f5f5f0] transition-colors hover:bg-[#0057ff]"
        >
          CODE ↗
        </a>
      </div>

    </div>
  );
}