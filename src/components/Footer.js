import { Linkedin, Mail, Github, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ruhul-amin-barbhuiya-790834167/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ruhulbarbhuiya228@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/ruhul321', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="border-t border-border/40 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-heading font-bold text-lg">
            <span className="text-amber">R</span>
            <span className="text-white">uhul</span>
          </a>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                data-testid={`footer-social-${social.label.toLowerCase()}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/50 text-slate-500 hover:text-amber hover:border-amber/40 hover:bg-amber/5 transition-all duration-300"
              >
                <social.icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-amber" /> &copy; 2026 Ruhul Amin
          </p>
        </div>
      </div>
    </footer>
  );
}
