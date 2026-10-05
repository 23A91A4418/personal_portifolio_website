import { motion } from "framer-motion";

function About() {
  const education = [
    {
      degree: "B.Tech in Data Science",
      institution: "Aditya University, Surampalem",
      score: "CGPA: 8.71",
      period: "Aug 2023 – Present"
    },
    {
      degree: "Board of Intermediate (12th)",
      institution: "Sri Sai Aditya Junior College, Kakinada",
      score: "Percentage: 83.7%",
      period: "2023"
    },
    {
      degree: "Secondary School (10th)",
      institution: "Ravindra Bharathi School, Pithapuram",
      score: "Percentage: 96.3%",
      period: "2021"
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-950/40 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
            I am a Data Science undergraduate passionate about designing and deploying machine learning
            and AI solutions using Python, SQL, and modern ML frameworks. Skilled in data preprocessing,
            feature engineering, predictive modeling, and model evaluation.
          </p>

          <p className="text-gray-400 leading-relaxed text-base mb-6">
            My experience spans Deep Learning, Natural Language Processing (NLP), Computer Vision (YOLOv8, MediaPipe, DeepSORT),
            and building scalable ML pipelines deployed via FastAPI and React.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-6">
            <h3 className="text-lg font-bold text-amber-400 mb-3">
              Certifications & Qualifications
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Introduction to Python (Red Hat)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Java Foundations (Oracle)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Machine Learning (LinkedIn Learning)
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">
            Education
          </h3>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition"
              >
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h4 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded-md border border-amber-500/20">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">
                  {edu.institution}
                </p>
                <p className="text-amber-400 text-sm font-medium">
                  {edu.score}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;