import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 overflow-hidden w-full px-6"
    >
      <div className="w-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 text-sky-400 w-full text-center tracking-tight drop-shadow-sm"
        >
          About Me
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-300 text-xl md:text-2xl leading-relaxed font-medium"
          >
            I enjoy tackling challenging problems and turning complex ideas into practical solutions. 
            Over time, I’ve developed a love for experimenting with different technologies and frameworks, 
            and I thrive in environments where I can continuously learn and improve.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-xl md:text-2xl leading-relaxed font-medium"
          >
            Beyond coding, I am curious about how technology can shape the world, and I aim to contribute to projects that make a real impact. 
            I enjoy collaborating with others, exchanging ideas, and bringing innovative solutions to life.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;