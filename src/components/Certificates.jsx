import { motion } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { FaAward } from 'react-icons/fa';

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10 bg-slate-200/50 dark:bg-black/40 border-y border-slate-300 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 glass-panel border-slate-300 dark:border-white/20 mb-4"
          >
            <span className="text-slate-600 dark:text-white font-mono text-sm tracking-widest">CREDENTIALS</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold"
          >
            Verified <span className="text-gradient">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 border-slate-300 dark:border-white/10 hover:border-secondary/50 group flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-dark flex items-center justify-center border border-secondary/30 text-secondary mb-6 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
                <FaAward size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-primary font-mono text-sm mb-4">{cert.issuer}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-300 dark:border-white/10 w-full flex justify-between items-center text-slate-500 dark:text-white/50 text-xs font-mono uppercase">
                <span>Issued:</span>
                <span className="text-slate-800 dark:text-white/80">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certificates;
