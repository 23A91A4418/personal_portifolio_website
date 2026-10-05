function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-wide hover:text-amber-400 transition">
          Prasanna Gandham
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <li><a href="#about" className="hover:text-amber-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-amber-400 transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-amber-400 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-amber-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-amber-400 transition">Contact</a></li>
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-block px-4 py-2 text-xs font-semibold border border-amber-500/50 text-amber-300 rounded-lg hover:bg-amber-500 hover:text-black transition"
        >
          Resume PDF
        </a>
      </div>
    </nav>
  );
}

export default Navbar;