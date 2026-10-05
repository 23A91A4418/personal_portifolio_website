import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      <Parallax speed={-20}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      </Parallax>

      <Parallax speed={15}>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </Parallax>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl relative z-10"
      >
        <p className="text-lg text-gray-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Gandham Rama Krishna Durga Prasanna
        </h1>

        <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
          Aspiring Data Scientist | ML Enthusiast
        </h2>

        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Data Science undergraduate specializing in Machine Learning, Deep Learning,
          Computer Vision, and scalable AI applications.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;