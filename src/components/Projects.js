import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import useInView from '../hooks/useInView';

const projects = [
  {
    title: 'The Wild Oasis',
    description: 'A comprehensive hotel management application with real-time availability tracking, booking management, and cabin administration dashboard.',
    tech: ['React', 'Next.js', 'Supabase', 'TailwindCSS'],
    liveLink: 'https://the-wild-oasis-website-lovat.vercel.app/',
    sourceLink: 'https://github.com/ruhul321/the-wild-oasis',
    accent: 'from-amber/20 to-yellow-600/20',
  },
  {
    title: 'Natours',
    description: 'Full-featured tour booking platform with Stripe payment integration, user reviews, interactive maps, and authentication system.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Pug', 'Stripe'],
    liveLink: 'https://natours-9lvk.onrender.com/',
    sourceLink: 'https://github.com/ruhul321/natours',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Forkify',
    description: 'Recipe search and bookmarking application with custom recipe uploads, serving adjustments, and clean responsive interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Forkify API'],
    liveLink: 'https://forkify-ruhul.netlify.app/',
    sourceLink: 'https://github.com/ruhul321/Forkify-Recipe-App',
    accent: 'from-rose-500/20 to-orange-500/20',
  },
];

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      data-testid={`project-card-${index}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-shine group border border-border/50 rounded-xl overflow-hidden hover:border-amber/40 transition-all duration-500 bg-surface/30 backdrop-blur-sm hover:shadow-xl hover:shadow-amber/5 hover:-translate-y-1"
    >
      {/* Top gradient bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center group-hover:bg-amber/20 transition-colors">
            <FolderGit2 size={20} className="text-amber" />
          </div>
          <div className="flex gap-2">
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-source-link-${index}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-amber hover:bg-amber/10 transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`project-live-link-${index}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-amber hover:bg-amber/10 transition-all"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <h3 className="font-heading font-semibold text-lg text-white mb-2 group-hover:text-amber transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 bg-base/60 text-slate-400 rounded-md border border-border/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" data-testid="projects-section" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-amber tracking-widest uppercase">Projects</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
