import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const educations = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "University of Dhaka",
    period: "Present",
    description: "Pursuing a Bachelor’s degree in Computer Science and Engineering, covering core subjects such as programming, algorithms, data structures, databases, and software development. Developing strong problem-solving and analytical skills through coursework and academic projects."
  },
];

function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center">

        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-sky-400 tracking-tight"
        >
          Education
        </motion.h2>

        <div className="w-full flex flex-col gap-12">
          {educations.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-sky-500/50 transition-colors duration-300 shadow-lg">
                  <AcademicCapIcon className="w-8 h-8 text-sky-400 group-hover:text-sky-300 transition-colors" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-sky-400 transition-colors mb-4">
                    {edu.degree}
                  </h3>
                  <span className="text-sky-400 font-medium text-sm md:text-base mt-1 md:mt-0 tracking-wide">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="italic text-xl md:text-2xl text-slate-300 font-medium mb-3">
                  {edu.institution}
                </h4>
                
                <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
