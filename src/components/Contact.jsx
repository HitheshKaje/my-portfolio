import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [copied, setCopied] = useState(false);

  const targetEmail = 'hitheshkajemoole2004@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: form.message,
          _replyto: form.email,
          _subject: `New Portfolio Message from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
          _autoresponse: `Hi ${form.name},\n\nThank you for reaching out through my portfolio! I have received your message and will respond as soon as possible.\n\nBest regards,\nHithesh Kajemoole`
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true || response.status === 200) {
        setLoading(false);
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(null), 7000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact Form Transmission Error:', error);
      setLoading(false);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 glass-panel border-primary/30 mb-4"
          >
            <span className="text-primary font-mono text-sm tracking-widest glow-text">TRANSMISSION</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold"
          >
            Establish <span className="text-gradient">Connection</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Direct Info & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Let's build something <span className="text-secondary">extraordinary.</span>
            </h3>
            <p className="text-slate-600 dark:text-white/60 mb-8 leading-relaxed">
              Whether you have a project in mind, a job opportunity, or just want to connect, my inbox is always open. Every message is delivered straight to my personal email.
            </p>

            {/* Direct Email Pill with 1-Click Copy */}
            <div className="mb-8 p-4 rounded-xl glass-panel border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Direct Email</span>
                  <a 
                    href={`mailto:${targetEmail}`}
                    className="text-sm sm:text-base font-mono text-slate-900 dark:text-white hover:text-primary transition-colors truncate"
                  >
                    {targetEmail}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-white/10 hover:bg-primary/20 hover:text-primary text-xs font-mono transition-all self-end sm:self-auto cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <FaCheck className="text-primary" /> : <FaCopy />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: 'https://github.com/HitheshKaje', label: 'GitHub' },
                { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/hithesh-k-14656132a/', label: 'LinkedIn' },
                { Icon: SiLeetcode, href: 'https://leetcode.com/u/Hitheshkajemoole/', label: 'LeetCode' }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-slate-300 dark:border-white/10 text-slate-500 dark:text-white/50 hover:text-primary dark:hover:text-primary hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Contact Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 flex flex-col gap-5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
            >
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base font-mono text-slate-700 dark:text-white/90 font-semibold tracking-wide">
                  Your Name <span className="text-primary">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-3.5 sm:p-4 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all font-sans rounded-xl"
                />
              </div>
              
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base font-mono text-slate-700 dark:text-white/90 font-semibold tracking-wide">
                  Your Email <span className="text-primary">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. john@example.com" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-3.5 sm:p-4 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-secondary focus:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all font-sans rounded-xl"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base font-mono text-slate-700 dark:text-white/90 font-semibold tracking-wide">
                  Phone Number <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-3.5 sm:p-4 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,136,0.25)] transition-all font-sans rounded-xl"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base font-mono text-slate-700 dark:text-white/90 font-semibold tracking-wide">
                  Your Message <span className="text-primary">*</span>
                </label>
                <textarea 
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Hithesh, I would like to discuss..." 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-3.5 sm:p-4 text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all font-sans resize-none rounded-xl"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 hover:from-primary hover:via-[#00FFC4] hover:to-secondary border border-primary/50 hover:border-primary text-slate-900 dark:text-white hover:text-slate-950 rounded-full shadow-[0_0_20px_rgba(0,255,136,0.25)] hover:shadow-[0_0_35px_rgba(0,255,136,0.6)] transition-all duration-300 font-space font-bold tracking-wider uppercase flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              >
                {loading ? 'Transmitting to Hithesh...' : 'Send Message'}
                {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {/* Success Notification */}
              {status === 'success' && (
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/40 text-primary font-mono text-xs sm:text-sm text-center flex items-center justify-center gap-2">
                  <FaCheck />
                  <span>Message delivered directly to Hithesh ({targetEmail})!</span>
                </div>
              )}

              {/* Fallback Option if direct API experiences block */}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs sm:text-sm text-center flex flex-col gap-2">
                  <span>Network issue submitting message.</span>
                  <a
                    href={`mailto:${targetEmail}?subject=Portfolio%20Message%20from%20${encodeURIComponent(form.name || 'Visitor')}&body=${encodeURIComponent(form.message || '')}`}
                    className="inline-flex items-center justify-center gap-1.5 text-primary hover:underline font-bold"
                  >
                    <FaEnvelope /> Click here to send directly via Email client
                  </a>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
