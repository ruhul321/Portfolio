import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import useInView from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
    barWidth: '90%',
  },
  {
    title: 'Front-End',
    skills: ['React', 'Next.js', 'Redux', 'React Query', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap'],
    barWidth: '92%',
  },
  {
    title: 'Back-End',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Mongoose', 'JSP'],
    barWidth: '88%',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'],
    barWidth: '82%',
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'GitHub Actions', 'AWS', 'Azure', 'CI/CD', 'Terraform'],
    barWidth: '72%',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'Swagger', 'Supabase', 'SOAP UI'],
    barWidth: '85%',
  },
];

function SkillCategory({ category, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      data-testid={`skill-category-${index}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-border/50 rounded-xl p-5 bg-surface/30 hover:border-amber/30 hover:bg-surface/60 transition-all duration-500 group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-sm text-white group-hover:text-amber transition-colors">
          {category.title}
        </h3>
        <Code2 size={16} className="text-amber/40 group-hover:text-amber/80 transition-colors" />
      </div>

      {/* Animated skill bar */}
      <div className="w-full h-1 bg-border/30 rounded-full mb-5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: category.barWidth } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-amber to-amber-light rounded-full"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            data-testid={`skill-tag-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            className="font-mono text-xs px-2.5 py-1.5 border border-border/50 text-slate-400 rounded-lg hover:border-amber/40 hover:text-amber hover:bg-amber/5 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" data-testid="skills-section" className="py-24 md:py-32 relative dot-pattern">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-amber tracking-widest uppercase">Skills</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Tech Stack & Expertise
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
