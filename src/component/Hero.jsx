import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Sumaiya Rahman Soma
            </span>
          </h1>

          <h2 className="text-xl italic md:text-3xl text-slate-300 mb-6 font-semibold">
            Passionate Full-Stack Developer
          </h2>

          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            Exploring Artificial Intelligence and Machine Learning to build
            technology that solves real-world problems.
          </p>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-8 py-3 rounded-full transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(56,189,248,0.4)]"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Glowing Background */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-glow"></div>

            {/* Profile Image */}
            <img
              src="/Profile.png"
              alt="Sumaiya Rahman"
              className="relative w-96 h-96 md:w-[28rem] md:h-[28rem] object-cover rounded-full border-4 border-sky-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
