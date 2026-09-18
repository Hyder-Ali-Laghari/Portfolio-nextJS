// // components/HeroSection.jsx
// 'use client';
// import { motion } from 'framer-motion';

import SkillsSection from "./SkillsSection";
import SkillsSectionMobile from "./SkillsSectionMobile";

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="relative mx-auto mt-28 flex min-h-[70vh] sm:min-h-[80vh] max-w-4xl flex-col items-start justify-center px-4 py-12 sm:mx-8 sm:mt-2 sm:py-20"
    >
      {/* Small Eyebrow Badge */}
      <div className="animate-fade-up mt-0 md:mt-20 mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary)]" />
        Available for New Opportunities
      </div>

      {/* Main Name Heading */}

      <h1  className="animate-fade-up  [animation-delay:100ms] mb-2 text-7xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-7xl">
        Hyder Ali
      </h1>
      

      {/* Subtitle / Profession */}
      <h2 className="animate-fade-up [animation-delay:200ms] mb-6 text-3xl font-semibold text-slate-400 md:text-3xl">
        Software Engineer
      </h2>

      {/* Bio Paragraph */}
      <p className="animate-fade-up [animation-delay:300ms] mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
        I am a software developer specializing in building high-performance,
        user-focused web applications. Skilled in{' '}
        <span className="font-semibold text-[var(--primary)]">ReactJS</span>,{' '}
        <span className="font-semibold text-[var(--primary)]">NextJS</span>, and an
        expert in{' '}
        <span className="font-semibold text-[var(--primary)]">JavaScript</span>,{' '}
        <span className="font-semibold text-[var(--primary)]">HTML</span> and{' '}
        <span className="font-semibold text-[var(--primary)]">CSS</span>.
      </p>

      {/* Call To Action Button */}
      <div className="animate-fade-up [animation-delay:400ms] flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-[var(--foreground)] shadow-lg shadow-[#0057FF]/25 transition-all hover:opacity-90 active:scale-95"
        >
          View Projects
        </a>
      </div>
      <div className="hidden md:block">
        <SkillsSection/>

      </div>

      <div className="block md:hidden">
        <SkillsSectionMobile/>
      </div>

    </section>
  );
}