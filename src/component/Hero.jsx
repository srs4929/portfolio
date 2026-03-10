
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Sumaiya Rahman Soma
            </span>
          </h1>

          <h2 className="text-sm sm:text-base md:text-2xl italic text-slate-300 mb-6 font-semibold">
            Passionate Full-Stack Developer
          </h2>

          <p className="text-sm sm:text-base md:text-base text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
            Exploring Artificial Intelligence and Machine Learning to build
            technology that solves real-world problems.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.4)]"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="relative flex items-center justify-center">
            {/* Glowing Background */}
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-glow"></div>

            {/* Profile Image */}
            <img
              src="/Profile.png"
              alt="Sumaiya Rahman"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;