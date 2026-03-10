
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-slate-900 text-slate-400 py-6 text-center border-t border-slate-800"
      initial={{ opacity: 0, y: 20 }}      // start slightly below
      whileInView={{ opacity: 1, y: 0 }}   // float in
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm md:text-base">
        © 2026 Sumaiya Rahman Soma. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;