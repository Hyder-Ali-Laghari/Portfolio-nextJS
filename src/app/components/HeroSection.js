// components/HeroSection.jsx
'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-start max-w-4xl mx-8 mt-20 py-20 px-4">
      {/* Small Eyebrow Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wide text-slate-300 mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
        Available for New Opportunities
      </motion.div>

      {/* Main Name Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2"
      >
        Hyder Ali
      </motion.h1>

      {/* Subtitle / Profession */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6"
      >
        Software Engineer
      </motion.h2>

      {/* Bio Paragraph with Dynamic Highlight Hex (#0057FF) */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8"
      >
        I am a software developer specializing in building high-performance, user-focused web applications. Skilled in{' '}
        <span className="font-semibold text-[#0057FF]">ReactJS</span>,{' '}
        <span className="font-semibold text-[#0057FF]">NextJS</span>, and an expert in{' '}
        <span className="font-semibold text-[#0057FF]">JavaScript</span>,{' '}
        <span className="font-semibold text-[#0057FF]">HTML</span> and{' '}
        <span className="font-semibold text-[#0057FF]">CSS</span>.
      </motion.p>

      {/* Call To Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 rounded-xl bg-[#0057FF] text-white font-medium hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#0057FF]/25"
        >
          View Projects
        </a>
        {/* <a 
          href="#contact" 
          className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium hover:bg-slate-800 hover:text-white active:scale-95 transition-all"
        >
          Contact Me
        </a> */}
      </motion.div>
    </section>
  );
}