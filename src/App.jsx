import Navbar from "./component/navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen font-inter text-slate-200 relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-background"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        <main className="w-full flex-grow">
          <div className="max-w-7xl mx-auto w-full">
            <Hero />
          </div>
          <About />
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
            <Education />
            <div className="h-20"></div> {/* Spacer */}
            <Experience />
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
