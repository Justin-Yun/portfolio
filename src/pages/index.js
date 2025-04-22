import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Navigation from "../components/navigation";

const homeContent = (
  <>
    <Head>
      <title>{"Justin Yun's Portfolio"}</title>
    </Head>
    <Navigation></Navigation>
    <main className="bg-gray-100 text-gray-900 min-h-screen font-sans">
      {/* Home Section */}
      <section
        id="home"
        className="flex items-center justify-center h-screen bg-white"
      >
        <Header></Header>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-700 text-lg">
            {
              "I'm a frontend developer passionate about building beautiful and responsive web apps. I specialize in React, Next.js, and Tailwind CSS."
            }
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Project 
                  {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  A short description of the project.
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out if you want to collaborate!
          </p>
          <a
            href="mailto:justin.yun@colorado.edu"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  </>
);

export default function Home() {
  return <>{homeContent}</>;
}
