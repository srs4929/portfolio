import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: "Email",
      href: "mailto:rahmansoma2003@gmail.com",
      bg: "bg-sky-500",
      hoverBg: "hover:bg-sky-400",
      textColor: "text-slate-900",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      text: "GitHub",
      href: "https://github.com/srs4929",
      bg: "bg-slate-900 border border-sky-400 text-sky-400",
      hoverBg: "hover:bg-sky-400 hover:text-slate-900",
      textColor: "",
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      text: "LinkedIn",
      href: "https://linkedin.com/in/srs4929",
      bg: "bg-slate-900 border border-sky-400 text-sky-400",
      hoverBg: "hover:bg-sky-400 hover:text-slate-900",
      textColor: "",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-sky-400"
        >
          Get In Touch
        </motion.h2>

        {/* Small message under heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 mb-12 text-lg flex items-center justify-center gap-2"
        >
         
          Feel free to reach out for projects, collaborations, or just a friendly hello ! Reach out through any of the links below.
        </motion.p>

        {/* Contact buttons with float-in one by one */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 120 }}
              className={`w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-center transition-all duration-300 ${item.bg} ${item.hoverBg} ${item.textColor}`}
            >
              {item.icon}
              {item.text}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;