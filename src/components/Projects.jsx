import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Context-Aware Safety Monitoring System",
      featured: true,
      description:
        "Real-time AI surveillance system using YOLOv8, DeepSORT, MediaPipe Pose, and LSTM to detect suspicious and unsafe activities from CCTV video streams. Includes an end-to-end dashboard with FastAPI, React, and PostgreSQL for live monitoring, instant alerts, event logging, and safety analytics.",
      tech: ["YOLOv8", "DeepSORT", "MediaPipe", "LSTM", "FastAPI", "React", "PostgreSQL", "Computer Vision"],
      github: "https://github.com/23A91A4418"
    },
    {
      title: "Transformer Encoder from Scratch with Attention Visualization",
      featured: false,
      description:
        "Built a Transformer Encoder from scratch in PyTorch implementing scaled dot-product attention, multi-head attention, and positional encodings. Integrated a Streamlit dashboard to visualize attention heatmaps and head behavior for model interpretability.",
      tech: ["PyTorch", "Transformers", "Deep Learning", "Streamlit", "Python"],
      github: "https://github.com/23A91A4418"
    },
    {
      title: "Persistent-Memory AI Academic Advisor with MCP & Vector Search",
      featured: false,
      description:
        "Memory-enabled AI advisor leveraging FastAPI and Retrieval-Augmented Generation (RAG) to overcome LLM context limits. Designed a hybrid memory architecture using SQLite and ChromaDB for structured storage and semantic retrieval, containerized with Docker.",
      tech: ["LLMs", "RAG", "FastAPI", "ChromaDB", "SQLite", "Docker", "MCP"],
      github: "https://github.com/23A91A4418"
    },
    {
      title: "Human Action Detection via Sensor Analytics",
      featured: false,
      description:
        "Developed a Machine Learning system for Human Action Detection analyzing accelerometer and gyroscope sensor data to classify physical activities (walking, sitting, standing, lying) with feature engineering and signal processing.",
      tech: ["Machine Learning", "Python", "Scikit-learn", "Sensor Data", "Feature Engineering"],
      github: "https://github.com/23A91A4418"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical AI/ML implementations, Computer Vision pipelines, and full-stack intelligent systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-zinc-900 border ${project.featured ? "border-amber-500/50 shadow-amber-950/20" : "border-zinc-800"
                } p-8 rounded-2xl shadow-xl flex flex-col justify-between hover:border-zinc-700 transition group relative overflow-hidden`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
                  Featured AI Project
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition pr-24">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs font-medium rounded-lg border border-zinc-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;