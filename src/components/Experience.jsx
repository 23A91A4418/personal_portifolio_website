import { motion } from "framer-motion";

function Experience() {
    const experiences = [
        {
            title: "AI Engineer Intern",
            company: "Day Learner Pvt Limited",
            period: "Internship",
            details: [
                "Developed an AI-powered CCTV surveillance system using YOLOv8, DeepSORT, MediaPipe Pose, and LSTM for real-time suspicious activity detection.",
                "Implemented a FastAPI–React pipeline for live video monitoring, instant alerts, and event management."
            ],
            tech: ["YOLOv8", "DeepSORT", "MediaPipe", "LSTM", "FastAPI", "React"]
        },
        {
            title: "Machine Learning Intern",
            company: "1stop.ai",
            period: "Internship",
            details: [
                "Built a machine learning model for Human Action Detection by analyzing accelerometer and gyroscope sensor data.",
                "Applied data preprocessing, feature engineering, and model evaluation techniques to accurately classify human activities."
            ],
            tech: ["Machine Learning", "Python", "Scikit-learn", "Sensor Analytics"]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-zinc-950/60 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Work Experience
                </h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-800">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-black z-10"></div>

                            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg hover:border-zinc-700 transition">
                                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                        <h3 className="text-xl font-bold text-white">
                                            {exp.title}
                                        </h3>
                                        <span className="text-xs bg-amber-500/10 text-amber-300 font-semibold px-3 py-1 rounded-full border border-amber-500/20">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-amber-400 text-sm font-medium mb-4">
                                        {exp.company}
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-4 leading-relaxed">
                                        {exp.details.map((point, pIdx) => (
                                            <li key={pIdx}>{point}</li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tech.map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-xs bg-zinc-800 text-gray-400 px-2.5 py-0.5 rounded"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
