import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Intern",
    company: "GenMorphics AI Solution",
    period: "Jan 2025 – Apr 2025",
  },
   
  {
    role: "Assistant General Secretary (Organization)",
    company: "CSEDU Student’s Club",
    period: "Feb 2024 – Present",
   
  },
  {
    role: "Strategist",
    company: "Holy Cross Science Club",
    period: "Apr 2021 – Dec 2021",
   
  },
  {
    role: "Organizing Secretary",
    company: "Ideal Debating Club",
    period: "Sep 2018 – Nov 2020",
    
  }
];

function Experience() {
  return (
    <div id="experience" className="w-full">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
         className="text-5xl md:text-6xl font-bold mb-16 text-center text-sky-400 tracking-tight">
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 md:left-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="mb-12 relative w-full pl-8 md:pl-12 text-left"
            >
              {/* Timeline Dot */}
              <div 
                className="absolute w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-900 top-1.5 -left-[9px]"
              />

              <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-xl hover:border-sky-500/30 hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] transition-all duration-500 group">
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-xl text-slate-300 mt-1 mb-2 font-medium">
                  {exp.company}
                </h4>
                <div className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-sm font-semibold mt-2">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
