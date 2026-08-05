import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 glass-panel border-secondary/30 mb-4"
          >
            <span className="text-secondary font-mono text-sm tracking-widest glow-text">CAPABILITIES</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold"
          >
            Technical <span className="text-gradient">Arsenal</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div 
                className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              
              <h3 className="text-slate-700 dark:text-white/80 font-mono text-sm font-medium tracking-wide group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">
                {skill.name}
              </h3>
              
              {/* Progress bar line */}
              <div className="w-full h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                  className="h-full bg-primary relative"
                  style={{ backgroundColor: skill.color }}
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-white opacity-50 shadow-[0_0_5px_white]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
