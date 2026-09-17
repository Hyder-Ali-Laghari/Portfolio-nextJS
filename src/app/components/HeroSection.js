// // components/HeroSection.jsx
// 'use client';
// import { motion } from 'framer-motion';

import SkillsSection from "./SkillsSection";
import SkillsSectionMobile from "./SkillsSectionMobile";

// export default function HeroSection() {
//   return (
//     <section id='heroSection' className="relative min-h-[80vh] flex flex-col justify-center items-start max-w-4xl mx-4 sm:mx-8 mt-16 sm:mt-20 py-12 sm:py-20 px-4">
//       {/* Small Eyebrow Badge */}
//       <motion.div
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wide text-slate-300 mb-6 will-change-transform"
//       >
//         <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse" />
//         Available for New Opportunities
//       </motion.div>

//       {/* Main Name Heading */}
//       <motion.h1
//   initial={false}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2"
// >
//   Hyder Ali
// </motion.h1>

//       {/* Subtitle / Profession */}
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6 will-change-transform"
//       >
//         Software Engineer
//       </motion.h2>

//       {/* Bio Paragraph */}
//       <motion.p 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 will-change-transform"
//       >
//         I am a software developer specializing in building high-performance, user-focused web applications. Skilled in{' '}
//         <span className="font-semibold text-[#0057FF]">ReactJS</span>,{' '}
//         <span className="font-semibold text-[#0057FF]">NextJS</span>, and an expert in{' '}
//         <span className="font-semibold text-[#0057FF]">JavaScript</span>,{' '}
//         <span className="font-semibold text-[#0057FF]">HTML</span> and{' '}
//         <span className="font-semibold text-[#0057FF]">CSS</span>.
//       </motion.p>

//       {/* Call To Action Buttons */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="flex flex-wrap gap-4 will-change-transform"
//       >
//         <a 
//           href="#projects" 
//           className="px-6 py-3 rounded-xl bg-[#0057FF] text-white font-medium hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#0057FF]/25"
//         >
//           View Projects
//         </a>
//       </motion.div>
//     </section>
//   );
// }

// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="relative mx-4 mt-28 flex min-h-[70vh] sm:min-h-[80vh] max-w-4xl flex-col items-start justify-center px-4 py-12 sm:mx-8 sm:mt-2 sm:py-20"
    >
      {/* Small Eyebrow Badge */}
      <div className="animate-fade-up mt-0 md:mt-20 mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#0057FF]" />
        Available for New Opportunities
      </div>

      {/* Main Name Heading */}
      <h1 className="animate-fade-up  [animation-delay:100ms] mb-2 text-7xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
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
        <span className="font-semibold text-[#0057FF]">ReactJS</span>,{' '}
        <span className="font-semibold text-[#0057FF]">NextJS</span>, and an
        expert in{' '}
        <span className="font-semibold text-[#0057FF]">JavaScript</span>,{' '}
        <span className="font-semibold text-[#0057FF]">HTML</span> and{' '}
        <span className="font-semibold text-[#0057FF]">CSS</span>.
      </p>

      {/* Call To Action Button */}
      <div className="animate-fade-up [animation-delay:400ms] flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-[#0057FF] px-6 py-3 font-medium text-white shadow-lg shadow-[#0057FF]/25 transition-all hover:opacity-90 active:scale-95"
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