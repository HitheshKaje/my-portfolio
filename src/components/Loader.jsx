import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [hasEntered, setHasEntered] = useState(false);
  const [typedName, setTypedName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const fullName = "HITHESH KAJEMOOLE";
  const audioCtxRef = useRef(null);
  const completionTimerRef = useRef(null);

  // Initialize or resume Web Audio on user gesture
  const initAudio = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext && !audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume().catch(() => {});
      }
    } catch {
      // Audio not supported / silent fallback
    }
  };

  // Cyber typewriter tick sound for each letter
  const playTickSound = () => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(620, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.04);

      gainNode.gain.setValueAtTime(0.07, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio errors
    }
  };

  // Futuristic power-up chime when user clicks to enter
  const playEnterChime = () => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      [260, 390, 520, 780].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.3, now + 0.28 + idx * 0.03);

        gain.gain.setValueAtTime(0.045, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35 + idx * 0.03);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.03);
        osc.stop(now + 0.35 + idx * 0.03);
      });
    } catch {
      // Ignore audio errors
    }
  };

  // Harmonious completion chord when full name is written
  const playSuccessChime = () => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.05, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4 + idx * 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + 0.4 + idx * 0.05);
      });
    } catch {
      // Ignore audio errors
    }
  };

  // Cleanup timers and audio on unmount
  useEffect(() => {
    return () => {
      if (completionTimerRef.current) {
        clearTimeout(completionTimerRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Enter action triggered by button click, screen click, or keyboard Enter/Space
  const handleEnter = useCallback(() => {
    if (!hasEntered) {
      initAudio();
      playEnterChime();
      setHasEntered(true);
    } else {
      // If user clicks after entering, immediately go to home page
      onLoadingComplete();
    }
  }, [hasEntered, onLoadingComplete]);

  // Keyboard shortcut listener (Enter or Spacebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleEnter]);

  // Reliable Letter-by-letter typing effect (paced at a relaxed, readable 120ms)
  useEffect(() => {
    if (!hasEntered) return;

    let index = 0;
    const typingSpeed = 120; // Slightly slower, steady typewriter pace

    const interval = setInterval(() => {
      index++;
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index));
        const char = fullName[index - 1];
        if (char !== ' ') {
          playTickSound();
        }
      }

      if (index >= fullName.length) {
        clearInterval(interval);
        setIsComplete(true);
        playSuccessChime();

        // Redirect directly to the portfolio home page after a brief 600ms visual pause
        completionTimerRef.current = setTimeout(() => {
          onLoadingComplete();
        }, 600);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [hasEntered, fullName, onLoadingComplete]);

  return (
    <motion.div
      onClick={handleEnter}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark select-none overflow-hidden cursor-pointer"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background Cyber Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.12) 0%, rgba(0, 229, 255, 0.08) 35%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Interactive Container (Centered) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-2 sm:px-6">
        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <motion.div
              key="enter-prompt"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10, transition: { duration: 0.25 } }}
              className="flex flex-col items-center justify-center"
            >
              {/* Sleek Centered "CLICK ME TO ENTER" Button */}
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnter();
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full border border-primary/50 bg-slate-950/85 hover:bg-slate-900 text-white font-mono text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase font-bold shadow-[0_0_25px_rgba(0,255,136,0.3)] hover:shadow-[0_0_45px_rgba(0,255,136,0.7)] hover:border-primary transition-all duration-300 backdrop-blur-md flex items-center gap-3 sm:gap-4 cursor-pointer"
              >
                {/* Pulsing Neon Indicator */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>

                <span className="glow-text text-white">CLICK ME TO ENTER</span>

                {/* Cyber Arrow Bracket */}
                <span className="text-secondary font-mono font-bold text-base sm:text-lg group-hover:translate-x-1.5 transition-transform duration-200">
                  &gt;
                </span>
              </motion.button>

              {/* Subtext Prompt */}
              <motion.p
                animate={{ opacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 text-[10px] sm:text-xs font-mono text-slate-400 tracking-[0.25em] uppercase text-center"
              >
                [ TAP OR PRESS ENTER TO INITIALIZE ]
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="name-revealer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Glowing Uppercase Name - Always Single Line */}
              <div
                className="font-mono text-[clamp(1.1rem,4.2vw,3.4rem)] font-extrabold tracking-[0.16em] sm:tracking-[0.26em] uppercase text-white whitespace-nowrap flex items-center justify-center text-center max-w-full overflow-visible"
                style={{
                  textShadow:
                    '0 0 10px rgba(0, 255, 136, 0.9), 0 0 22px rgba(0, 255, 136, 0.65), 0 0 35px rgba(0, 229, 255, 0.5), 0 0 55px rgba(0, 229, 255, 0.35)',
                }}
              >
                <span>{typedName}</span>

                {/* Blinking Futuristic Cursor Block while typing */}
                {!isComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.45, repeat: Infinity }}
                    className="inline-block w-2 sm:w-3 md:w-3.5 h-[1em] bg-primary ml-1 sm:ml-2 shadow-[0_0_14px_#00FF88]"
                  />
                )}
              </div>

              {/* Status indicator when typing completes right before redirect */}
              {isComplete && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="mt-5 text-xs sm:text-sm font-mono text-secondary tracking-[0.3em] uppercase glow-text whitespace-nowrap"
                >
                  ACCESS GRANTED • ENTERING PORTFOLIO...
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Loader;
