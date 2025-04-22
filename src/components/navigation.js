import Link from "next/link";

const Navigation = () => {
  const navigationContent = (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-6">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
  return navigationContent;
};

export default Navigation;
