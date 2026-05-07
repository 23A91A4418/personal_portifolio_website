function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          My Portfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;