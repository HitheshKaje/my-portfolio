import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="glass-panel p-8 md:p-12 border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary"></div>

              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                Developer <span className="text-gradient"> Overview</span>
              </h2>

              <div className="space-y-4 text-slate-700 dark:text-white/70 font-mono text-sm leading-relaxed">

                <p>
                  I am a passionate and dedicated Software Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real-world projects through clean code, continuous learning, and creative problem-solving.
                </p>
                <p>
                  My technical foundation includes Java, Python, C, JavaScript, React, Node.js, Express.js, MongoDB, HTML, CSS, Tailwind CSS, and SQL. I am constantly improving my skills by developing practical projects, exploring AI/ML concepts, and learning new technologies to become a better developer every day.
                </p>

              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 w-full sm:w-auto bg-white/5 border border-slate-300 dark:border-white/20 hover:border-primary text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-all rounded-none font-orbitron tracking-wider sm:tracking-widest text-xs sm:text-sm uppercase group"
              >
                <FaDownload className="group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                <span className="truncate">Extract_Resume.pdf</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] lg:w-[340px] lg:h-[340px] flex justify-center items-center">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 border-[2px] border-dashed border-secondary/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-3 lg:inset-4 border border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Profile Image Container */}
              <div className="absolute inset-6 lg:inset-8 rounded-full overflow-hidden border-[2px] border-primary shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] hover:scale-[1.03] transition-all duration-300 group cursor-pointer bg-dark z-10 flex items-center justify-center">
                <img
                  src="/me.jpeg"
                  alt="Hithesh K"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
