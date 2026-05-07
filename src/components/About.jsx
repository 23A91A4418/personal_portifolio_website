import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <img
            src="https://via.placeholder.com/400"
            alt="Profile"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I am an aspiring Data Scientist passionate about Machine Learning,
            Deep Learning, and Large Language Models (LLMs), with a strong
            interest in solving real-world problems using intelligent systems.
            I enjoy building impactful projects that combine innovation,
            analytics, and practical applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-4">
            Currently, I am focused on strengthening my skills in Data Science,
            ML engineering, cloud-based AI solutions, and full stack
            development while preparing for internships and career opportunities
            in the field of Artificial Intelligence.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;