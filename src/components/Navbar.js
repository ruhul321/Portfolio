import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Mail, Github } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruhul-amin-barbhuiya-790834167/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ruhulbarbhuiya228@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/ruhul321', label: 'GitHub' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href.replace('#', ''));
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-base/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            data-testid="navbar-logo"
            className="font-heading font-bold text-xl tracking-tight group"
          >
            <span className="text-amber">R</span>
            <span className="text-white group-hover:text-amber/90 transition-colors">uhul</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                className={`relative font-heading text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === link.href.replace('#', '')
                    ? 'text-amber bg-amber/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                data-testid={`social-link-${social.label.toLowerCase()}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-slate-400 hover:text-amber hover:border-amber/50 hover:bg-amber/5 transition-all duration-300"
              >
                <social.icon size={15} />
              </a>
            ))}
            <a
              href="#contact"
              data-testid="navbar-connect-btn"
              onClick={() => handleNavClick('#contact')}
              className="font-heading text-sm font-medium px-5 py-2.5 bg-amber text-base rounded-lg hover:bg-amber-light transition-all duration-300 ml-1"
            >
              Let's Connect
            </a>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              data-testid="mobile-menu"
              className="md:hidden overflow-hidden border-t border-border/50 mt-2"
            >
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-heading text-sm px-4 py-2.5 rounded-lg transition-all ${
                      activeLink === link.href.replace('#', '')
                        ? 'text-amber bg-amber/10'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 pb-4 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/60 text-slate-400 hover:text-amber transition-all"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
