// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function Navigation() {
//   const [activeSection, setActiveSection] = useState("hero");

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["hero", "experience", "projects"];
//       const scrollPosition = window.scrollY + window.innerHeight / 3;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   const navItems = [
//     { id: "hero", label: "Home" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#2a2a2a]"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo/Name */}
//           <motion.button
//             onClick={() => scrollToSection("hero")}
//             className="text-xl font-bold text-white hover:text-[#6366f1] transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             YN
//           </motion.button>

//           {/* Navigation Tabs */}
//           <div className="flex items-center gap-1 bg-[#161616] rounded-full p-1 border border-[#2a2a2a]">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
//                   activeSection === item.id
//                     ? "text-white"
//                     : "text-gray-400 hover:text-gray-300"
//                 }`}
//               >
//                 {activeSection === item.id && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute inset-0 bg-[#6366f1] rounded-full"
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   />
//                 )}
//                 <span className="relative z-10">{item.label}</span>
//               </button>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <motion.a
//             href="mailto:your.email@example.com"
//             className="hidden md:block px-6 py-2 bg-[#6366f1] hover:bg-[#818cf8] text-white text-sm font-medium rounded-full transition-colors"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get in Touch
//           </motion.a>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }
//--------------------- NEW CODE ---------------------
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Navigation Tabs - Centered */}
          <div className="flex items-center gap-1 bg-[#161616] rounded-full p-1 border border-[#2a2a2a]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#6366f1] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}