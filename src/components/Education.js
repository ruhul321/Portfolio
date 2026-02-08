import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import useInView from '../hooks/useInView';

const certifications = [
  { title: 'IBM Full Stack Software Developer Professional Certificate', platform: 'Coursera', date: 'March 2021' },
  { title: 'The Complete 2023 Web Development Bootcamp', platform: 'Udemy', date: 'Jan 2021' },
  { title: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js', platform: 'Udemy', date: 'Feb 2022' },
];

const coursework = ['Data Structures and Algorithms', 'Web Technologies', 'Database Management Systems', 'Object-Oriented Programming', 'Software Engineering'];

export default function Education() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="education" data-testid="education-section" className="py-24 md:py-32 relative dot-pattern">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-amber tracking-widest uppercase">Education</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="education-degree-card"
            className="border border-border/50 rounded-xl p-6 bg-surface/30 hover:border-amber/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-amber" />
              </div>
              <h3 className="font-heading font-semibold text-white">Degree</h3>
            </div>

            <h4 className="font-heading font-medium text-white mb-1">
              Bachelor of Technology in Computer Science & Engineering
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              BVEC, Nirala, Karimganj &bull; 2017 - 2021 &bull; 78%
            </p>

            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={14} className="text-amber/60" />
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span key={c} className="font-mono text-[11px] px-2.5 py-1.5 border border-border/40 text-slate-400 rounded-lg">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-border/50 rounded-xl p-6 bg-surface/30 hover:border-amber/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center">
                <Award size={20} className="text-amber" />
              </div>
              <h3 className="font-heading font-semibold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  data-testid={`certification-${i}`}
                  className="border-l-2 border-amber/30 pl-4 hover:border-amber transition-colors"
                >
                  <h4 className="font-heading text-sm font-medium text-white">{cert.title}</h4>
                  <p className="text-slate-500 text-xs mt-1">
                    {cert.platform} &bull; {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
