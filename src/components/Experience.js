import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import useInView from '../hooks/useInView';

const experiences = [
  {
    company: 'H&M Services Private Limited',
    location: 'Bangalore',
    role: 'Software Engineer',
    period: 'Dec 2025 - Present',
    current: true,
    points: [
      'Designed and developed an internal broadcasting platform enabling stakeholders to publish and manage clothing content across multiple business domains, improving content delivery efficiency by ~40%.',
      'Refactored and optimized API integration with a global common clothing data service, reducing API response latency by ~35% and improving data throughput under high concurrency.',
      'Translated Jira user stories into scalable technical solutions, delivering features within Agile sprint cycles with minimal regression defects.',
    ],
  },
  {
    company: 'Firstsource Solution Limited',
    location: 'Bangalore',
    role: 'Full Stack Developer',
    period: 'Jan 2025 - Dec 2025',
    current: false,
    points: [
      'Developed Agentic AI Solution, a portal leveraging AI/LLMs to dynamically generate UI components from Excel configuration files.',
      'Implemented a low-code/no-code UI generation system, reducing manual UI development time by 60%.',
      'Enhanced authentication and authorization via Keycloak (OAuth2, JWT, SSO), ensuring secure multi-tenant access control.',
      'Built and maintained backend microservices using Node.js, Express, and MongoDB, optimizing scalability and performance.',
      'Deployed components on Azure, incorporating CI/CD pipelines for automated testing and deployment.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Bangalore',
    role: 'System Engineer',
    period: 'Dec 2021 - Jan 2025',
    current: false,
    points: [
      'Designed and implemented enterprise-scale modules as part of Agile teams, improving system stability and scalability.',
      'Revamped responsive UI using React, TypeScript, and TailwindCSS, achieving 95% mobile-friendliness and boosting engagement.',
      'Built RESTful APIs using Node.js and Express, and optimized SQL queries for faster performance (30% reduction in retrieval time).',
      'Conducted automated unit testing with Jest, achieving 90% code coverage and reducing production bugs by 25%.',
      'Migrated legacy components to microservice architecture, improving maintainability and reducing technical debt by 20%.',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      data-testid={`experience-card-${index}`}
      initial={{ opacity: 0, x: -40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber/60 via-border to-transparent" />

      {/* Timeline dot */}
      <div className={`absolute left-[-6px] top-2 w-[13px] h-[13px] rounded-full border-2 ${
        exp.current ? 'border-amber bg-amber/30 shadow-md shadow-amber/30' : 'border-slate-500 bg-base'
      }`} />

      <div className="card-shine border border-border/60 rounded-xl p-6 hover:border-amber/30 transition-all duration-500 bg-surface/40 backdrop-blur-sm group">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-heading font-semibold text-lg text-white group-hover:text-amber transition-colors">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="text-[10px] font-mono px-2 py-0.5 bg-amber/15 text-amber rounded-full border border-amber/30">
                  CURRENT
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Briefcase size={13} className="text-amber/60" />
                {exp.company}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-amber/60" />
                {exp.location}
              </span>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-slate-500 border border-border/60 px-3 py-1.5 rounded-lg whitespace-nowrap bg-base/50">
            <Calendar size={12} />
            {exp.period}
          </span>
        </div>

        <ul className="space-y-3">
          {exp.points.map((point, i) => (
            <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
              <span className="text-amber/50 mt-1 shrink-0">&#9656;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" data-testid="experience-section" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-amber tracking-widest uppercase">Experience</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Where I've Worked
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </motion.div>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
