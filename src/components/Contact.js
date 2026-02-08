import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Phone, MapPin } from 'lucide-react';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (field, value) => {
    if (field === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://portfolio-napz.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (result.code === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }

    setSending(false);
  };

  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-amber tracking-widest uppercase">Contact</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mt-3">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <p className="text-slate-400 leading-relaxed mb-8">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="text-amber" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Email</p>
                  <a href="mailto:ruhulbarbhuiya228@gmail.com" className="text-sm text-slate-300 hover:text-amber transition-colors">
                    ruhulbarbhuiya228@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-amber" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Phone</p>
                  <span className="text-sm text-slate-300">+91 9101641886</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-amber" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Location</p>
                  <span className="text-sm text-slate-300">Bangalore, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="lg:col-span-3 border border-border/50 rounded-xl p-6 bg-surface/30 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-slate-500 font-mono mb-2 block">First Name *</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  data-testid="contact-firstname-input"
                  className="w-full bg-base/60 border border-border/50 rounded-lg px-4 py-3 text-white text-sm focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all placeholder:text-slate-600"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 font-mono mb-2 block">Last Name</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  data-testid="contact-lastname-input"
                  className="w-full bg-base/60 border border-border/50 rounded-lg px-4 py-3 text-white text-sm focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all placeholder:text-slate-600"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-slate-500 font-mono mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  data-testid="contact-email-input"
                  className="w-full bg-base/60 border border-border/50 rounded-lg px-4 py-3 text-white text-sm focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 font-mono mb-2 block">Phone *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  data-testid="contact-phone-input"
                  className="w-full bg-base/60 border border-border/50 rounded-lg px-4 py-3 text-white text-sm focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all placeholder:text-slate-600"
                  placeholder="9876543210"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="text-xs text-slate-500 font-mono mb-2 block">Message</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                data-testid="contact-message-input"
                className="w-full bg-base/60 border border-border/50 rounded-lg px-4 py-3 text-white text-sm focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all resize-none placeholder:text-slate-600"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              data-testid="contact-submit-btn"
              className="font-heading text-sm font-medium px-6 py-3 bg-amber text-base rounded-lg hover:bg-amber-light transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber/20"
            >
              <Send size={14} />
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
              <p
                data-testid="contact-status-message"
                className={`text-sm mt-4 font-medium ${
                  status.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
