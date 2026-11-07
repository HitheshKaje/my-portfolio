import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import me from '../assets/me.jpeg';

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
                className="mt-8 flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 w-full sm:w-auto bg-slate-900/40 dark:bg-white/5 backdrop-blur-md border border-primary/40 hover:border-primary text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary rounded-full shadow-[0_0_15px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 font-orbitron tracking-wider sm:tracking-widest text-xs sm:text-sm uppercase group"
              >
                <FaDownload className="group-hover:-translate-y-1 transition-transform flex-shrink-0 text-primary" />
                <span className="truncate">Extract_Resume.pdf</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative group p-3">
              {/* Futuristic Cyber Frame / Corner Accents */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-30 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Outer Decorative Square Border */}
              <div className="absolute inset-0 border border-secondary/40 rounded-xl pointer-events-none"></div>

              {/* Corner Tech Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-primary z-20"></div>
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-secondary z-20"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-secondary z-20"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-primary z-20"></div>

              {/* Square Profile Image Container */}
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-lg overflow-hidden border-2 border-primary/60 shadow-[0_0_30px_rgba(0,255,136,0.25)] group-hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] group-hover:border-primary transition-all duration-300 bg-dark z-10">
                <img
                  src={me}
                  alt="Hithesh K"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
