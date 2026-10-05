import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C", "Java (Foundational)", "SQL (Basics)"]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "Supervised & Unsupervised ML",
        "Data Preprocessing",
        "Feature Engineering",
        "Model Evaluation",
        "NLP",
        "Computer Vision",
        "RAG & LLMs"
      ]
    },
    {
      category: "Deep Learning & Frameworks",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Neural Networks",
        "Keras",
        "YOLOv8",
        "MediaPipe Pose",
        "LSTM"
      ]
    },
    {
      category: "Web & Databases",
      skills: ["FastAPI", "React", "PostgreSQL", "SQLite", "ChromaDB (Vector DB)"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "MLflow", "Streamlit", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg hover:border-zinc-700 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-amber-400 border-b border-zinc-800 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-zinc-800 text-gray-200 text-sm px-3 py-1.5 rounded-lg border border-zinc-700/50 hover:bg-zinc-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;