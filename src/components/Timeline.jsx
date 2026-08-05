import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timeline } from '../data/portfolio';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6" ref={containerRef}>
        
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 glass-panel border-accent/30 mb-4"
          >
            <span className="text-accent font-mono text-sm tracking-widest glow-text">TIMELINE</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold"
          >
            Experience & <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-white/10 transform md:-translate-x-1/2"></div>
          
          {/* Animated fill line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-6 w-4 h-4 rounded-full bg-slate-100 dark:bg-dark border-2 border-primary transform -translate-x-1/2 md:translate-x-0 md:-ml-2 z-10 shadow-[0_0_10px_#00FF88]">
                  <motion.div 
                    className="absolute inset-0 bg-primary rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring" }}
                  ></motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}
                >
                  <div className="glass-panel p-6 hover:border-secondary/50 transition-colors group">
                    <span className="text-secondary font-mono text-sm mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">{item.role}</h3>
                    <h4 className="text-slate-700 dark:text-white/70 text-sm mb-4 font-mono">{item.company}</h4>
                    <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Timeline;
