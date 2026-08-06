import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { FaAward, FaDownload, FaEye, FaTimes, FaCheckCircle } from 'react-icons/fa';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
            <span className="text-slate-600 dark:text-white font-mono text-sm tracking-widest uppercase">CREDENTIALS</span>
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
              className="glass-panel p-6 border-slate-300 dark:border-white/10 hover:border-secondary/50 group flex flex-col items-center text-center relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-dark flex items-center justify-center border border-secondary/30 text-secondary mb-5 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
                <FaAward size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">{cert.title}</h3>
              <p className="text-primary font-mono text-sm mb-3 flex items-center gap-1.5">
                <FaCheckCircle className="text-xs" /> {cert.issuer}
              </p>

              {cert.credentialId && (
                <div className="bg-slate-900/50 dark:bg-white/5 border border-slate-300/30 dark:border-white/10 px-3 py-1 rounded-md text-[11px] font-mono text-slate-600 dark:text-white/60 mb-5 truncate max-w-full">
                  ID: <span className="text-slate-800 dark:text-white/90">{cert.credentialId}</span>
                </div>
              )}
              
              <div className="mt-auto pt-4 border-t border-slate-300 dark:border-white/10 w-full flex flex-col gap-3">
                <div className="flex justify-between items-center text-slate-500 dark:text-white/50 text-xs font-mono uppercase">
                  <span>Issued:</span>
                  <span className="text-slate-800 dark:text-white/80">{cert.date}</span>
                </div>

                <div className="flex gap-2 w-full pt-1">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 py-2 px-3 bg-secondary/10 border border-secondary/40 hover:bg-secondary hover:text-slate-950 text-secondary rounded-full font-mono text-xs uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <FaEye size={12} /> View
                  </button>
                  <a
                    href={cert.fileUrl}
                    download
                    className="flex-1 py-2 px-3 bg-primary/10 border border-primary/40 hover:bg-primary hover:text-slate-950 text-primary rounded-full font-mono text-xs uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <FaDownload size={12} /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox Viewer */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-panel p-6 max-w-2xl w-full border-primary/40 rounded-2xl relative flex flex-col items-center gap-4 bg-slate-900/95 dark:bg-dark/95 text-white shadow-2xl"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FaTimes size={20} />
                </button>

                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 text-primary flex items-center justify-center">
                  <FaAward size={24} />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold font-orbitron">{selectedCert.title}</h3>
                  <p className="text-primary font-mono text-sm mt-1">{selectedCert.issuer}</p>
                  {selectedCert.credentialId && (
                    <p className="text-xs font-mono text-white/50 mt-1">Credential ID: {selectedCert.credentialId}</p>
                  )}
                </div>

                <div className="w-full max-h-[50vh] overflow-hidden rounded-xl border border-white/10 my-2 flex items-center justify-center bg-black/40">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain max-h-[50vh]"
                  />
                </div>

                <div className="flex gap-4 w-full justify-center pt-2">
                  <a
                    href={selectedCert.fileUrl}
                    download
                    className="py-3 px-8 bg-gradient-to-r from-primary to-secondary text-slate-950 font-space font-bold rounded-full shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.7)] transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
                  >
                    <FaDownload /> Download Document
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
};

export default Certificates;
