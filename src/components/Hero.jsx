import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const linesToType = [
  { text: "> BOOTING SYSTEM KERNEL...", color: "text-primary font-bold" },
  { text: "[OK] Portfolio loaded.", color: "text-slate-400 dark:text-white/70" },
  { text: "[OK] Skills database connected.", color: "text-slate-400 dark:text-white/70" },
  { text: "[OK] Projects indexed.", color: "text-slate-400 dark:text-white/70" },
  { text: "[OK] GitHub API synchronized.", color: "text-slate-400 dark:text-white/70" },
  { text: "[OK] Software modules initialized.", color: "text-slate-400 dark:text-white/70" },
  { text: "", color: "" },
  { text: "> READY FOR RECRUITERS", color: "text-secondary font-bold" },
];

const Hero = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= linesToType.length) return;

    const currentLine = linesToType[currentLineIndex];

    if (currentCharIndex < currentLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentLine.text === "" ? 0 : 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max rotation 15 degrees
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      {/* Holographic glowing orb behind text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block py-1 px-3 glass-panel border-primary/30 w-max mb-2">
            <span className="text-primary font-mono text-sm tracking-widest glow-text">SYSTEM.ONLINE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-space leading-tight text-slate-900 dark:text-white">
            Hi, I'm <br />
            <span className="text-gradient">Hithesh K</span>
          </h1>

          <div className="h-12 md:h-16 text-2xl md:text-3xl text-slate-700 dark:text-white/80 font-space font-medium">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Creative Coder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-600 dark:text-white/60 max-w-lg leading-relaxed mt-2 text-lg">
            Building modern, scalable, and user-friendly web applications. Passionate about solving real-world problems through clean code and continuous learning.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mt-6 w-full max-w-sm sm:max-w-none">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="w-full sm:w-auto text-center px-6 md:px-8 py-3 text-sm md:text-base bg-primary text-slate-900 dark:text-dark font-space font-semibold tracking-wider uppercase border border-primary hover:glow-box transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Initialize Sequence</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto text-center px-6 md:px-8 py-3 text-sm md:text-base bg-transparent text-slate-900 dark:text-white font-space font-semibold tracking-wider uppercase border border-slate-300 dark:border-white/20 hover:border-secondary hover:text-secondary dark:hover:text-secondary hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex gap-6 mt-12">
            {[FaGithub, FaLinkedin, SiLeetcode].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: '#00FF88' }}
                className="text-slate-400 dark:text-white/50 hover:text-primary dark:hover:text-primary transition-colors text-2xl"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right 3D/Visual element - Simplified for now, complex 3D is in Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Holographic rings */}
          <div className="absolute w-80 h-80 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }}></div>
          <div className="absolute w-96 h-96 rounded-full border border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" style={{ borderStyle: 'dotted' }}></div>
          <div className="absolute w-64 h-64 rounded-full border-2 border-accent/20 animate-[spin_8s_linear_infinite]"></div>

          <div
            className="relative z-10 perspective-1000 w-full max-w-md"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY, opacity: [0.9, 1, 0.95, 1] }}
              transition={{
                rotateX: { type: "spring", stiffness: 300, damping: 30 },
                rotateY: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { repeat: Infinity, duration: 4, ease: "linear" }
              }}
              className="glass-panel p-6 rounded-2xl shadow-[0_0_50px_rgba(0,255,136,0.2)] border-primary/40 flex flex-col relative overflow-hidden bg-slate-900/90 dark:bg-dark/90 backdrop-blur-xl min-h-[350px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Scan line */}
              <motion.div
                className="absolute inset-0 border-b border-primary/20 bg-gradient-to-b from-transparent to-primary/5 z-20 pointer-events-none"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-700 dark:border-white/10 pb-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 dark:text-white/50">sys_core.exe</span>
              </div>

              {/* Terminal Body */}
              <div className="font-mono text-sm space-y-2 text-left relative z-10" style={{ transform: "translateZ(40px)" }}>
                {typedLines.map((line, i) => (
                  <p key={i} className={line.color}>
                    {line.text}
                    {i === linesToType.length - 1 && (
                      <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
                    )}
                  </p>
                ))}
                {currentLineIndex < linesToType.length && (
                  <p className={linesToType[currentLineIndex].color}>
                    {linesToType[currentLineIndex].text.substring(0, currentCharIndex)}
                    <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
                  </p>
                )}

                {/* Decorative data bars */}
                {currentLineIndex >= linesToType.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-6 space-y-3 pt-6"
                  >
                    <div className="w-full h-1 bg-slate-700 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <div className="w-3/4 h-1 bg-slate-700 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-secondary"
                        animate={{ width: ["100%", "0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    <div className="w-1/2 h-1 bg-slate-700 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent"
                        animate={{ width: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" style={{ transform: "translateZ(10px)" }}></div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 dark:text-white/40 font-mono text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
