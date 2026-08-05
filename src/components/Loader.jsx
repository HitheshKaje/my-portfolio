import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const topText = "HITHESH HUB\n        INITIALIZING...";
  const bottomText = "HITHESH KAJEMOOLE";
  
  useEffect(() => {
    // Top text takes ~3.0s to finish. Bottom text starts at 3.0s and takes ~1.4s. Total ~4.4s.
    // Add 1s for the user to read before dismissing = 5.5s total timeout.
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const topContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const bottomContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 3.0 }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-72 h-72">
        <motion.div
          className="absolute inset-0 border-t-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-b-2 border-secondary rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border-l-2 border-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            variants={topContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-primary font-mono text-sm text-left tracking-widest flex flex-wrap justify-start glow-text max-w-[220px]"
          >
            {topText.split("").map((char, index) => (
              char === "\n" ? (
                <div key={`br-${index}`} className="basis-full h-2"></div>
              ) : (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              )
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden flex justify-center">
        <motion.div
          variants={bottomContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-white font-mono text-4xl md:text-5xl tracking-[0.3em] uppercase opacity-90 flex flex-wrap justify-center font-bold"
        >
          {bottomText.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className={char !== " " ? "glow-text" : ""}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
