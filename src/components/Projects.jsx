import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Human Action Detection",
      description:
        "Built a Human Action Detection system using accelerometer and gyroscope sensor data to classify activities like walking, sitting, standing, and lying.",
      tech: "Machine Learning, Python, Scikit-learn",
      github: "https://github.com/23A91A4418"
    },
    {
      title: "Autoencoder for Anomaly Detection",
      description:
        "Developed an anomaly detection system using autoencoder neural networks on the Thyroid Disease dataset with reconstruction error analysis.",
      tech: "Deep Learning, TensorFlow, Autoencoder",
      github: "https://github.com/23A91A4418"
    },
    {
      title: "AI Academic Advisor",
      description:
        "Built a memory-enabled AI advisor using FastAPI, SQLite, and ChromaDB with Retrieval-Augmented Generation for context-aware responses.",
      tech: "LLMs, FastAPI, Docker, RAG",
      github: "https://github.com/23A91A4418"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition"
              >
                GitHub Repo
              </a>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;