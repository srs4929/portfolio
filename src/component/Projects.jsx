import { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "DoctorBaba",
    description:
      "Doctor Baba is a Flutter mobile app designed for rural and low-literacy users in Bangladesh. It provides bilingual (Bengali & English) content, audio guidance, AI-powered medical report explanations, seasonal disease alerts, and basic symptom discussion to promote healthcare awareness.",
    tech: ["Flutter", "FastAPI", "Supabase", "GEMINI API", "GROQ API"],
    github: "https://github.com/srs4929/Doctor_Baba_Frontend.git",
    live: "https://youtu.be/nv4kAIcrEA0",
    image: "/DoctorBaba.png",
  },
  {
    id: 2,
    title: "Utshob",
    description:
      "The Utshob All-in-One website is a comprehensive event management system that allows users to plan and book all essential services for their events in one place. The platform integrates multiple event-related facilities such as hall booking, catering services, and decoration arrangements, providing a seamless experience for users",
    tech: ["React.js", "Supabse", "Tailwind CSS"],
    github: "https://github.com/srs4929/Utshob_DBMS_Project.git",
    live: "https://youtu.be/E77WDKY6F-U?si=gyOIImiGVovWpmbU",
    image: "/Utshob.png",
  },
  {
    id: 3,
    title: "Murir Tin",
    description:
      "Murir Tin is a smart local bus app designed to improve public transportation in Dhaka. It introduces color-coded routes, live GPS tracking, QR-code-based ticket booking, a complaint management system, and emergency SOS features. The app simplifies daily travel for commuters and aligns with the government’s initiative to make bus routes more organized.",
    tech: ["Flutter", "FastAPI", "Supabase", "Mapbox API"],
    github: "https://github.com/srs4929/Murir_Tin_Frontend.git",
    live: "https://youtu.be/UqTgfAkSuBM?si=FwKCUTmWGr2iPVAq",
    image: "/Murir Tin.png",
  },
  {
    id: 4,
    title: "NetVision",
    description:
      "NetVision is an educational, browser-based networking visualization tool designed to help students understand core computer networking concepts through interactive simulations and real implementations. The project visualizes how TCP, HTTP, DNS, and TCP congestion control mechanisms work internally, bridging the gap between theory and practice.",

    tech: ["Python", "Socket Programming", "CSS","Streamlit"],
    github: "https://github.com/srs4929/NetVision-Networking-Project-3-1-.git",
    live: "",
    image: "/NetVision.png",
  },
  {
    id: 5,
    title: "ResQure",
    description:
      "NetVision is an educational, browser-based networking visualization tool designed to help students understand core computer networking concepts through interactive simulations and real implementations. The project visualizes how TCP, HTTP, DNS, and TCP congestion control mechanisms work internally, bridging the gap between theory and practice.",

    tech: ["Java", "JavaFx", "MySQL","Socket Programming"],
    github: "https://github.com/srs4929/RESQURE-OOP-PROJECT-2-1-.git",
    live: "https://youtu.be/2S9PdOSIpks?si=02oO3DmtvXZkpAaC",
    image: "/Resqure.png",
  },
  {
    id: 6,
    title: "Brain-Code Renovo",
    description:
      "Brain-Code Renovo is a fun game designed to challenge players with different types of brainstorming questions. The game has three levels. The first level tests IQ and logical thinking. The second level focuses on selecting words based on pictures, encouraging creativity and visual reasoning. The third level is cipher-based, inspired by CTF and cryptography, and tests problem-solving and analytical skills. Overall, the game combines learning and entertainment, motivating players to find the correct solutions through scores and feedback.",


    tech: ["C", "C++", "IGraphics"],
    github: "https://github.com/aditto007/Brain-Code-Renovo-CSE-1211-Project.git",
    live: "https://youtu.be/2S9PdOSIpks?si=02oO3DmtvXZkpAaC",
    image: "/Brain.png",
  },
  

];

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 overflow-hidden font-inter"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-12 text-center tracking-wide text-sky-400"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 120,
            }}
            className="bg-slate-900/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-700/50 flex flex-col hover:-translate-y-2 transition-transform duration-500 hover:shadow-sky-500/10 hover:border-sky-500/30 overflow-hidden group"
          >
            {/* Project Image - Edge to Edge */}
            <div className="relative w-full h-56 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 font-medium">
                  No Image Available
                </div>
              )}
              {/* Optional Gradient Overlay for text readability if title was here, or just a sleek shadow block */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 decoration-0"></div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-between p-6 md:p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description with View More */}
                <p className="text-slate-400 mb-6 leading-relaxed text-base md:text-lg">
                  {expanded[project.id]
                    ? project.description
                    : project.description.slice(0, 120) +
                      (project.description.length > 120 ? "..." : "")}
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="ml-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors"
                    >
                      {expanded[project.id] ? "View Less" : "View More"}
                    </button>
                  )}
                </p>

                {/* Premium Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm md:text-base font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-300 px-3 py-1.5 rounded-lg backdrop-blur-md transition-all hover:bg-sky-500/20 hover:border-sky-500/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-3 rounded-xl text-sm font-semibold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Source Code
                  </a>
                ) : (
                  <span className="flex-1 bg-slate-800/50 border border-slate-700/50 text-slate-500 px-4 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 cursor-not-allowed">
                    Private Repo
                  </span>
                )}

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-4 py-3 rounded-xl text-base font-semibold text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                ) : (
                  <span className="flex-1 bg-slate-800/50 border border-slate-700/50 text-slate-500 px-4 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2 cursor-not-allowed">
                    No Demo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
