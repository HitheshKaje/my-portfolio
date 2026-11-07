import { motion } from 'framer-motion';

const Chakra = ({ isEntered = false, isHovered = false }) => {
  const numBlades = 12;
  const bladeAngles = Array.from({ length: numBlades }, (_, i) => (i * 360) / numBlades);

  // Aerodynamic curved cyclone blade matching the uploaded logo with 100% vector clarity
  const mainBladePath = "M 0 22 C 12 30, 34 52, 62 74 C 80 87, 98 94, 104 92 C 90 86, 70 68, 50 48 C 32 30, 16 22, 0 22 Z";
  const spineHighlightPath = "M 0 22 C 12 30, 34 52, 62 74 C 80 87, 98 94, 104 92 C 92 88, 74 74, 56 56 C 36 38, 18 26, 0 22 Z";

  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none">
      {/* Outer Cyan Ambient Glow Aura */}
      <motion.div
        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 72%)',
        }}
        animate={{
          scale: isEntered ? [1, 1.25, 1.15] : [1, 1.08, 1],
          opacity: isEntered ? [0.75, 1, 0.85] : [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Outer Subtle Energy Rings */}
      <motion.div
        className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-sky-400/20"
        style={{ borderStyle: 'dashed', borderWidth: '1px' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-400/25"
        style={{ borderStyle: 'dotted', borderWidth: '2px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Spinning Cyclone Symbol (Chakra) with 100% Vector Clarity */}
      <motion.div
        className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64"
        animate={{
          rotate: 360,
          scale: isEntered ? 1.12 : (isHovered ? 1.06 : 1),
        }}
        transition={{
          rotate: {
            duration: isEntered ? 2.0 : (isHovered ? 2.8 : 4.0),
            repeat: Infinity,
            ease: "linear",
          },
          scale: { duration: 0.35 },
        }}
        style={{
          filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.65))',
        }}
      >
        <svg
          viewBox="-125 -125 250 250"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          <defs>
            {/* Cyclone Blade Primary Gradient */}
            <linearGradient id="cycloneBladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#0ea5e9" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="1" />
            </linearGradient>

            {/* Translucent Highlight on Blade Spine */}
            <linearGradient id="cycloneSpineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            {/* Eye of the Cyclone Radial Gradient */}
            <radialGradient id="cycloneEyeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="65%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="88%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </radialGradient>

            {/* Soft 3D Drop Shadow Between Overlapping Blades */}
            <filter id="cycloneBladeShadow" x="-20%" y="-20%" width="150%" height="150%">
              <feDropShadow dx="-1" dy="2" stdDeviation="2.5" floodColor="#022f49" floodOpacity="0.45" />
            </filter>

            {/* Single Blade Template */}
            <g id="cyclone-single-blade">
              <path
                d={mainBladePath}
                fill="url(#cycloneBladeGrad)"
                filter="url(#cycloneBladeShadow)"
              />
              <path
                d={spineHighlightPath}
                fill="url(#cycloneSpineGrad)"
                opacity="0.8"
              />
            </g>
          </defs>

          {/* 12 Overlapping Cyclone Blades */}
          <g id="cyclone-blades-group">
            {bladeAngles.map((angle, idx) => (
              <use
                key={`blade-${idx}`}
                href="#cyclone-single-blade"
                transform={`rotate(${angle.toFixed(2)})`}
              />
            ))}
          </g>

          {/* Center Eye (Donut Core from the Logo) */}
          <circle cx="0" cy="0" r="25" fill="url(#cycloneEyeGrad)" />
          <circle cx="0" cy="0" r="17" fill="#ffffff" />
          <circle
            cx="0"
            cy="0"
            r="17"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="1.2"
            opacity="0.85"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Chakra;
