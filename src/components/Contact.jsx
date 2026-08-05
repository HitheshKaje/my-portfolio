import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Provide your EmailJS service ID, template ID, and public key here
    emailjs.send(
      'SERVICE_ID',
      'TEMPLATE_ID',
      {
        from_name: form.name,
        to_name: 'John Doe',
        from_email: form.email,
        to_email: 'your.email@example.com',
        message: form.message,
      },
      'PUBLIC_KEY'
    ).then(() => {
      setLoading(false);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }).catch((error) => {
      setLoading(false);
      setStatus('error');
      console.log(error);
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
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
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-4">Let's build something <span className="text-secondary">extraordinary.</span></h3>
            <p className="text-slate-600 dark:text-white/60 mb-8 leading-relaxed">
              Whether you have a project in mind, a question about my work, or just want to say hi, my inbox is always open. Let's create the future together.
            </p>
            
            <div className="flex gap-6 mt-4">
              {[FaGithub, FaLinkedin, SiLeetcode].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-slate-300 dark:border-white/10 text-slate-500 dark:text-white/50 hover:text-primary dark:hover:text-primary hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-panel p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-slate-600 dark:text-white/70 uppercase tracking-wider">Identifier</label>
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="What's your name?" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all font-sans"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-slate-600 dark:text-white/70 uppercase tracking-wider">Return Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="What's your email?" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-sans"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-slate-600 dark:text-white/70 uppercase tracking-wider">Payload</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="What do you want to say?" 
                  className="bg-slate-100/50 dark:bg-dark/50 border border-slate-300 dark:border-white/10 p-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(124,58,237,0.2)] transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 w-full py-4 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 hover:border-primary text-slate-700 dark:text-white hover:text-primary dark:hover:text-primary hover:bg-primary/10 transition-all font-space font-semibold tracking-wider uppercase flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? 'Transmitting...' : 'Send Message'}
                {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {status === 'success' && <p className="text-primary font-mono text-sm text-center mt-2">Message transmitted successfully!</p>}
              {status === 'error' && <p className="text-red-400 font-mono text-sm text-center mt-2">Transmission failed. Please try again.</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
