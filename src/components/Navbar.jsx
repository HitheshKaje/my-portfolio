import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiPlay, HiPause, HiSun, HiMoon } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileAudio, setShowMobileAudio] = useState(false);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to dark mode
    }
    return true;
  });

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // Apply theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md py-4 border-b border-slate-200 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,255,136,0.1)]' : 'bg-transparent py-6'
          }`}
      >
        {/* Placeholder Audio Element */}
        <audio ref={audioRef} loop src="/The_Low_Stone_Hall.mp3" />
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold font-orbitron tracking-[0.08em] flex items-center gap-2 group">
            <span className="text-primary group-hover:glow-text transition-all">&lt;</span>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">Hithesh K </span>
            <span className="text-secondary group-hover:glow-box transition-all"> /&gt;</span>
          </a>

          {/* Desktop Nav & Controls */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary dark:text-white/70 dark:hover:text-primary transition-colors font-orbitron font-medium text-sm uppercase tracking-wider relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#00FF88]"></span>
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 ml-4 border-l border-slate-300 dark:border-white/20 pl-6">
              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-28 h-1 bg-slate-300 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary outline-none"
                aria-label="Volume Control"
              />
              <button 
                onClick={toggleAudio}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-600 dark:text-white hover:text-primary dark:hover:text-primary hover:border-primary transition-all"
                aria-label="Toggle Audio"
              >
                {isPlaying ? <HiPause size={22} /> : <HiPlay size={22} />}
              </button>
              <button 
                onClick={toggleTheme}
                className="w-11 h-11 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-600 dark:text-white hover:text-secondary dark:hover:text-secondary hover:border-secondary transition-all"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <HiSun size={22} /> : <HiMoon size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Toggle & Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="text-slate-600 dark:text-white hover:text-secondary transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <HiSun size={26} /> : <HiMoon size={26} />}
            </button>
            <button
              className="text-slate-600 dark:text-white/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-[100px] h-screen bg-white/10 dark:bg-dark/80 backdrop-blur-xl flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-900 dark:text-white hover:text-secondary dark:hover:text-secondary font-orbitron font-medium text-xl uppercase tracking-wider mt-4"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex flex-col items-center mt-4 w-full">
              <button
                onClick={() => setShowMobileAudio(!showMobileAudio)}
                className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary font-orbitron font-medium text-xl uppercase tracking-wider flex items-center gap-2"
              >
                MUSIC
              </button>
              
              <AnimatePresence>
                {showMobileAudio && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col items-center gap-4 mt-6 overflow-hidden"
                  >
                    <div className="flex items-center gap-4">
                      <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-32 h-1 bg-slate-300 dark:bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary outline-none"
                        aria-label="Volume Control"
                      />
                      <button 
                        onClick={toggleAudio}
                        className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary hover:border-primary transition-all"
                        aria-label="Toggle Audio"
                      >
                        {isPlaying ? <HiPause size={26} /> : <HiPlay size={26} />}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
