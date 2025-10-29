"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { skills } from "@/data/skills";

export default function FloatingSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're still in the hero section (first viewport)
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        setIsInHeroSection(scrollPosition < heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 5 }}
      animate={{
        opacity: isInHeroSection ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {skills.map((skill, index) => (
        <FloatingBubble
          key={skill.id}
          skill={skill}
          index={index}
          isHovered={hoveredSkill === skill.id}
          onHover={() => setHoveredSkill(skill.id)}
          onLeave={() => setHoveredSkill(null)}
        />
      ))}
    </motion.div>
  );
}

interface FloatingBubbleProps {
  skill: {
    id: number;
    title: string;
    description: string;
    color: string;
  };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function FloatingBubble({ skill, index, isHovered, onHover, onLeave }: FloatingBubbleProps) {
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);
  
  // Generate random starting position anywhere on screen
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [finalPosition, setFinalPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const heroHeight = window.innerHeight;
      const centerX = window.innerWidth / 2;
      
      // Random starting position anywhere in hero section
      const randomX = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
      const randomY = Math.random() * (heroHeight * 0.7) + heroHeight * 0.15;
      
      setStartPosition({ x: randomX, y: randomY });
      
      // Calculate final position in horizontal line above "Available for work"
      // The line should be centered and spaced out
      const totalBubbles = 7;
      const spacing = 140; // Space between bubbles
      const lineWidth = (totalBubbles - 1) * spacing;
      const startX = centerX - lineWidth / 2;
      
      // Position above center (where "Available for work" badge is)
      const finalX = (index * spacing);
      const finalY = heroHeight * 0.35; // About 35% down the screen (above the badge)
      
      setFinalPosition({ x: finalX, y: finalY });
    }
  }, [index]);

  useEffect(() => {
    if (!mounted) return;

    // Animation sequence: fade in at random spot, then glide to final position
    const animate = async () => {
      // Small staggered delay for each bubble
      await new Promise(resolve => setTimeout(resolve, index * 200));
      
      // Glide to final position
      await controls.start({
        x: finalPosition.x,
        y: finalPosition.y,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2.5 + Math.random() * 1.5, // 2.5-4 seconds
          ease: [0.25, 0.1, 0.25, 1],
        },
      });
    };
    
    animate();
  }, [controls, mounted, index, finalPosition]);

  if (!mounted) return null;

  return (
    <motion.div
      animate={controls}
      initial={{
        x: startPosition.x,
        y: startPosition.y,
        opacity: 0,
        scale: 0.8,
      }}
      className="fixed pointer-events-auto"
      style={{
        zIndex: isHovered ? 50 : 10,
      }}
    >
      <motion.div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="relative group cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Main Bubble */}
        <motion.div
          className={`relative px-6 py-3 rounded-full border-2 backdrop-blur-sm ${skill.color}`}
          animate={{
            boxShadow: isHovered
              ? "0 0 40px rgba(99, 102, 241, 0.6)"
              : "0 0 20px rgba(99, 102, 241, 0.2)",
          }}
        >
          <span className="text-sm font-semibold text-white whitespace-nowrap">
            {skill.title}
          </span>
        </motion.div>

        {/* Tooltip/Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 pointer-events-none"
          style={{
            zIndex: 100,
          }}
        >
          <div className="bg-[#161616] border border-[#6366f1]/50 rounded-xl p-4 shadow-2xl">
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#161616] border-l border-t border-[#6366f1]/50 rotate-45" />
            
            {/* Content */}
            <div className="relative">
              <h4 className="text-white font-semibold mb-2 text-sm">
                {skill.title}
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{ background: skill.color.replace('border-', 'bg-') }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
}