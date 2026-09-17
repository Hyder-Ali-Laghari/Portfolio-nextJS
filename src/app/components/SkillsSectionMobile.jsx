'use client';

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, 
  SiMongodb, SiFirebase, SiPostman, SiVite, SiEslint, 
  SiFramer, SiGithubactions 
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages & Fundamentals',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    ],
  },
  {
    title: 'Frontend & UI Libraries',
    skills: [
      { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-400' },
      { name: 'Material Bootstrap', icon: FaBootstrap, color: 'text-indigo-400' },
      { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
      { name: 'Curfisy', icon: FaReact, color: 'text-blue-400' },
    ],
  },
  {
    title: 'Backend & Cloud Services',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
      { name: 'Firestore', icon: SiFirebase, color: 'text-amber-500' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: 'text-blue-400' },
      { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
      { name: 'ESLint', icon: SiEslint, color: 'text-indigo-400' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    ],
  },
];

export default function SkillsSectionMobile() {
  return (
    <section id="SkillsSection" className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-wide uppercase">
        Skills & Technologies
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs sm:text-sm font-semibold text-slate-400 tracking-wider uppercase">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {category.skills.map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:border-[#0057FF] active:scale-95 transition-all cursor-default group shadow-sm"
                  >
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}