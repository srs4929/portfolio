
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend (Web & APP)",
    skills: ["React.js", "Flutter", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java"]
  },
  {
    title: "Dev Tools",
    skills: ["Git", "Github", "Docker"]
  },
  {
    title: "Backend & Database",
    skills: ["MongoDB", "Supabase", "FastAPI"]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center tracking-wide text-sky-400"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border border-slate-800 shadow-xl hover:border-sky-500/30 hover:shadow-sky-900/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide border-b border-slate-800 pb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-black/40 border border-slate-700/50 rounded-xl px-4 py-2 flex items-center justify-center 
                               transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-sky-400"
                  >
                    <span className="text-slate-300 font-medium text-lg md:text-xl group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
