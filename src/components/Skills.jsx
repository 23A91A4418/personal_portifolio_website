function Skills() {
  const skills = [
    "Python",
    "Java",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "SQL",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "GitHub"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;