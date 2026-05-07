function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          I’m always open to internship opportunities, collaborations,
          and exciting projects in Machine Learning, Data Science, and AI.
        </p>

        <div className="space-y-4 text-lg">

          <p>
            Email:
            <a
              href="mailto:prasanna444177@gmail.com"
              className="ml-2 text-white hover:text-gray-400"
            >
              prasanna444177@gmail.com
            </a>
          </p>

          <p>
            GitHub:
            <a
              href="https://github.com/23A91A4418"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-white hover:text-gray-400"
            >
              github.com/23A91A4418
            </a>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/prasanna-gandham-b69a362b6/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-white hover:text-gray-400"
            >
              LinkedIn Profile
            </a>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;