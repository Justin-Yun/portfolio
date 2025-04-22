import Link from "next/link";
import Image from "next/image";
// import Social from "social"

const Header = () => {
  const headerContent = (
    <div className="text-center">
      <img
        src="images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full shadow-md mb-6"
      />
      <h1 className="text-5xl font-bold">Hello, I'm Justin Yun</h1>
      <p className="mt-4 text-xl text-gray-600">Software Developer Engineer</p>
      <a
        href="files/JY_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition m-6"
        >
        Resume
      </a>
      {/* <Social></Social> */}
    </div>
  );

  return headerContent;
};

export default Header;
