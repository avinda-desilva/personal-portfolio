"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export default function Experience() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-[#161616] via-[#0a0a0a] to-[#0a0a0a] overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-[#6366f1]/10 blur-3xl"
          animate={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"
          animate={{
            x: mousePosition.x * -2.5,
            y: mousePosition.y * -2.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ right: '15%', bottom: '30%' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 font-light">
            My professional journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#6366f1]/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                variants={itemVariants}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 bg-[#6366f1] rounded-full ring-4 ring-[#0a0a0a]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.3 }}
                />

                <motion.div
                  className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#6366f1]/50 transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <h3 className="text-2xl font-semibold text-white group-hover:text-[#6366f1] transition-colors mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <ul className="space-y-2 mb-6 relative z-10">
                      {experience.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                        >
                          <span className="text-[#6366f1] mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills/Technologies */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#0a0a0a] border border-[#2a2a2a] text-gray-300 text-sm rounded-full font-medium hover:border-[#6366f1]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}