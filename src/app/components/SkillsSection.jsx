// components/SkillsSection.jsx
'use client';
import { motion } from 'framer-motion';
// Icons from react-icons (npm install react-icons)
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaGithub, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, 
  SiMongodb, SiFirebase, SiPostman, SiVite, SiEslint, 
  SiFramer, SiFlower, SiGithubactions 
} from 'react-icons/si';

// Categorized Stack
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
      { name: 'Material Bootstrap Design', icon: FaBootstrap, color: 'text-indigo-400' },
      { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
      { name: 'Curfisy', icon: FaReact, color: 'text-blue-400' }, // Substitute icon if custom library
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

// Animation Variants for Left-to-Right Cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time delay between each badge sliding in
    },
  },
};

const slideLeftToRight = {
  hidden: { 
    opacity: 0, 
    x: -40 // Start 40px to the left
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: 'spring', 
      damping: 20, 
      stiffness: 150 
    } 
  },
};

export default function SkillsSection() {
  return (
    <section id='SkillsSection' className=" mx-[-8] py-6 mt-20 max-w-5xl  px-4 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-white mb-10 tracking-wide uppercase"
      >
        Skills & Technologies
      </motion.h2>

      <div className="space-y-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-sm font-semibold text-slate-400 tracking-wider uppercase"
            >
              {category.title}
            </motion.h3>

            {/* Container triggering staggered left-to-right children */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={i}
                    variants={slideLeftToRight}
                    whileHover={{ scale: 1.05, borderColor: '#0057FF' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#111622] border border-slate-800/80 hover:bg-[#182032] transition-colors cursor-default group shadow-sm"
                  >
                    <IconComponent className={`w-5 h-5 ${skill.color} transition-transform group-hover:scale-110`} />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}