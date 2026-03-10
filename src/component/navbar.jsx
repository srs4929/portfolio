
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center 
                    rounded-full shadow-[0_4px_30px_rgba(56,189,248,0.1)] border border-slate-800 mx-4 md:max-w-6xl md:mx-auto">
      {/* Logo */}
      <h1 className="text-sky-400 text-2xl font-extrabold tracking-wide">srs4929</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sky-400 text-base font-medium">
        <li><a href="#home" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Home</a></li>
        <li><a href="#about" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">About</a></li>
        <li><a href="#experience" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Experience</a></li>
        <li><a href="#education" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Education</a></li>
        <li><a href="#projects" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Projects</a></li>
        <li><a href="#skills" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Skills</a></li>
        <li><a href="#contact" className="hover:text-sky-300 transition-colors uppercase tracking-wider text-sm">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          {open ? (
            <XMarkIcon className="h-7 w-7 text-sky-400" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-sky-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-20 left-4 right-4 bg-slate-900 border border-slate-800 flex flex-col items-center gap-6 py-6 md:hidden text-sky-400 rounded-3xl auto shadow-2xl z-50">
          <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">About</a></li>
          <li><a href="#experience" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Experience</a></li>
          <li><a href="#education" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Education</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Projects</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Skills</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-sky-300 text-lg uppercase tracking-wider font-medium">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;