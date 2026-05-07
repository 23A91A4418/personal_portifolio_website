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
          I build intelligent solutions using Machine Learning,
          Data Science, and Modern AI systems to solve real-world problems.
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
            className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;