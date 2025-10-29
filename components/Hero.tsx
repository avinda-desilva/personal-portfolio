// "use client";

// import { motion } from "framer-motion";
// import { ChevronDown, Code2, Sparkles } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
    
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const scrollToProjects = () => {
//     const experienceSection = document.getElementById("experience");
//     experienceSection?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#161616] pt-20">
//       {/* Animated gradient orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute w-96 h-96 rounded-full bg-[#6366f1]/20 blur-3xl"
//           animate={{
//             x: mousePosition.x * 2,
//             y: mousePosition.y * 2,
//           }}
//           transition={{ type: "spring", stiffness: 50, damping: 30 }}
//           style={{
//             left: "20%",
//             top: "30%",
//           }}
//         />
//         <motion.div
//           className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
//           animate={{
//             x: mousePosition.x * -1.5,
//             y: mousePosition.y * -1.5,
//           }}
//           transition={{ type: "spring", stiffness: 50, damping: 30 }}
//           style={{
//             right: "20%",
//             bottom: "30%",
//           }}
//         />
//       </div>

//       {/* Floating particles */}
//       {isMounted && (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-[#6366f1]/30 rounded-full"
//               initial={{
//                 x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//                 y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
//               }}
//               animate={{
//                 y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>
//       )}

//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Animated badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#161616] border border-[#2a2a2a] rounded-full"
//           >
//             <Sparkles className="w-4 h-4 text-[#6366f1] animate-pulse-slow" />
//             <span className="text-sm text-gray-300">Available for work</span>
//           </motion.div>

//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
//             <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
//               Your Name
//             </span>
//           </h1>

//           <motion.div
//             className="flex items-center justify-center gap-3 mb-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <Code2 className="w-6 h-6 text-[#6366f1]" />
//             <p className="text-2xl md:text-3xl text-gray-400 font-light">
//               Full-Stack Developer & UI Designer
//             </p>
//           </motion.div>

//           <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Crafting beautiful, functional digital experiences with modern technologies. 
//             Specialized in React, Next.js, and everything in between.
//           </p>

//           <motion.button
//             onClick={scrollToProjects}
//             className="group inline-flex items-center gap-2 px-8 py-4 bg-[#6366f1] hover:bg-[#818cf8] text-white rounded-full transition-all duration-300 text-lg font-medium shadow-lg shadow-[#6366f1]/20 hover:shadow-[#6366f1]/40"
//             whileHover={{ scale: 1.05, y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//           >
//             View Work
//             <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-6 h-10 border-2 border-gray-700 rounded-full p-1"
//         >
//           <motion.div className="w-1.5 h-3 bg-[#6366f1] rounded-full mx-auto" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

//--------------------- NEW CODE ---------------------
"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code2, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { skills } from "@/data/skills";

// Skill Bubble Component
interface SkillBubbleProps {
  skill: {
    id: number;
    title: string;
    description: string;
    color: string;
  };
  index: number;
  hoveredSkillId: number | null;
  setHoveredSkillId: (id: number | null) => void;
}

function SkillBubble({ skill, index, hoveredSkillId, setHoveredSkillId }: SkillBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  const isHovered = hoveredSkillId === skill.id;
  const isAnyHovered = hoveredSkillId !== null;
  const shouldShrink = isAnyHovered && !isHovered;

  // Dynamic spacing calculation based on bubble widths
  const bubbleWidths = [
    210, // Web & API Development
    250, // React & Next.js
    250, // TypeScript
    250, // UI/UX Design
    200, // Cloud & DevOps
    210, // Database Design
    230, // Performance Optimization
  ];

  // Calculate cumulative offset for this bubble
  let leftOffset = 0;
  for (let i = 0; i < index; i++) {
    leftOffset += bubbleWidths[i] + 30;
  }

  // Calculate total width of all bubbles
  const totalWidth = bubbleWidths.reduce((sum, width) => sum + width, 0) + (bubbleWidths.length - 1) * 30;
  
  // Center the entire line
  const centerOffset = `calc(50% - ${totalWidth / 2}px)`;

  return (
    <motion.div
      ref={bubbleRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="absolute pointer-events-auto"
      style={{
        left: centerOffset,
        marginLeft: `${leftOffset}px`,
        top: "17%",
        zIndex: isHovered ? 50 : 10,
      }}
      onMouseEnter={() => setHoveredSkillId(skill.id)}
      onMouseLeave={() => setHoveredSkillId(null)}
    >
      <motion.div
        className="relative group cursor-pointer"
        animate={{
          scale: shouldShrink ? 0.5 : (isHovered ? 1.1 : 0.5),
          y: isHovered ? -5 : 0,
          opacity: shouldShrink ? 0.5 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Main Bubble */}
        <motion.div
          className="relative px-6 py-3 rounded-full border-2 backdrop-blur-sm flex items-center justify-center"
          animate={{
            backgroundColor: isHovered ? '#6366f1' : 'transparent',
            borderColor: isHovered ? '#6366f1' : 'rgba(99, 102, 241, 0.3)',
            boxShadow: isHovered
              ? "0 0 40px rgba(99, 102, 241, 0.6), 0 0 20px rgba(99, 102, 241, 0.4)"
              : "0 0 0px rgba(99, 102, 241, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="text-sm font-semibold whitespace-nowrap"
            animate={{
              opacity: isHovered ? 1 : 0,
              color: '#ffffff',
              textShadow: isHovered ? '0 0 10px rgba(255, 255, 255, 0.3)' : '0 0 0px rgba(255, 255, 255, 0)',
            }}
            transition={{ duration: 0.3 }}
          >
            {skill.title}
          </motion.span>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          animate={{
            backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.1)',
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Tooltip/Description - Centered directly below bubble */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 pointer-events-none"
          style={{ 
            zIndex: 100 
          }}
        >
          <div className="bg-[#161616] border border-[#6366f1]/50 rounded-xl p-4 shadow-2xl">
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#161616] border-l border-t border-[#6366f1]/50 rotate-45" />
            
            {/* Content */}
            <div className="relative">
              <p className="text-gray-400 text-xs leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredSkillId, setHoveredSkillId] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const experienceSection = document.getElementById("experience");
    experienceSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#161616] pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[#6366f1]/20 blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            left: "20%",
            top: "30%",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{
            right: "20%",
            bottom: "30%",
          }}
        />
      </div>

      {/* Skill Bubbles that fade in and align horizontally - Hidden on mobile */}
      {isMounted && (
        <div className="hidden md:block absolute inset-0 overflow-visible pointer-events-none">
          {skills.map((skill, index) => (
            <SkillBubble 
              key={skill.id} 
              skill={skill} 
              index={index}
              hoveredSkillId={hoveredSkillId}
              setHoveredSkillId={setHoveredSkillId}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated badge
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 mt-12 bg-[#161616] border border-[#2a2a2a] rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[#6366f1] animate-pulse-slow" />
            <span className="text-sm text-gray-300">Available for work</span>
          </motion.div> */}

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Avinda De Silva
            </span>
          </h1>

          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Code2 className="w-6 h-6 text-[#6366f1]" />
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              Software & Full-Stack Engineer
            </p>
          </motion.div>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            AI Systems Engineer with 3+ years of experience designing and deploying scalable, cloud-native, and ML-driven applications on AWS using Python and C++. Skilled in building intelligent, production-ready systems that enable real-world automation and elevate user experiences.
          </p>

          <motion.button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#6366f1] hover:bg-[#818cf8] text-white rounded-full transition-all duration-300 text-lg font-medium shadow-lg shadow-[#6366f1]/20 hover:shadow-[#6366f1]/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            View Work
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-700 rounded-full p-1"
        >
          <motion.div className="w-1.5 h-3 bg-[#6366f1] rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}