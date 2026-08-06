import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 glass-panel border-primary/30 mb-4"
          >
            <span className="text-primary font-mono text-sm tracking-widest glow-text">SYSTEM.MODULES</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-orbitron font-bold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-panel group overflow-hidden flex flex-col h-full border-slate-300 dark:border-white/10 hover:border-primary/50 transition-colors duration-300"
            >
              {/* Image Container with overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800 dark:bg-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Tech stack tags on image */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-900/80 dark:bg-dark/80 backdrop-blur-md border border-primary/40 text-xs font-mono text-primary rounded-md shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Cyberpunk corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 m-2"></div>
                
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                
                <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-300 dark:border-white/10">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-mono text-slate-600 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub size={18} />
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-mono text-secondary/70 hover:text-secondary hover:glow-box transition-colors ml-auto"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Launch</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
