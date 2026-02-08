import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const roles = ['Full Stack Developer', 'Software Engineer', 'MERN Stack Expert'];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-[120px] animate-pulse-amber" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] w-20 h-20 border border-amber/20 rounded-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -20, 10], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-[25%] w-12 h-12 bg-amber/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [-10, 15, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-[10%] w-2 h-2 bg-amber rounded-full hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber/10 border border-amber/20 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="font-heading text-sm text-amber">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Ruhul Amin</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center gap-2 mb-8 h-10 md:h-12"
          >
            <span className="text-amber text-xl md:text-2xl font-mono">&gt;</span>
            <span data-testid="typewriter-text" className="font-mono text-xl md:text-2xl text-slate-300">
              {text}
            </span>
            <span className="w-0.5 h-7 bg-amber animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Results-driven Software Engineer with 4+ years of experience in designing, developing, and deploying enterprise-scale web applications. Proficient in Python, JavaScript/TypeScript, and the React-Node.js-MongoDB ecosystem. Passionate about AI-driven automation and performance optimization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              data-testid="hero-view-projects-btn"
              className="font-heading text-sm font-medium px-7 py-3.5 bg-amber text-base rounded-lg hover:bg-amber-light transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-amber/20"
            >
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/Ruhul_Resume.pdf"
              download="Ruhul_Resume.pdf"
              data-testid="hero-download-resume-btn"
              className="font-heading text-sm font-medium px-7 py-3.5 border border-border text-slate-300 rounded-lg hover:border-amber/50 hover:text-amber hover:bg-amber/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex gap-10 mt-16 pt-10 border-t border-border/40"
          >
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '3', label: 'Companies' },
              { value: '10+', label: 'Projects Built' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-2xl md:text-3xl text-amber">{stat.value}</p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
