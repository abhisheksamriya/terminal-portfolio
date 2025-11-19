import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-8 sm:py-16 border-b border-green-700 mb-8 sm:mb-16 scroll-mt-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 glitch text-blue-600">
        <span>SKILLS</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-green-400 p-4 bg-black">
          <h3 className="text-xl font-bold mb-4 text-green-400">LANGUAGES</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              JavaScript
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              TypeScript
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              C++
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              C
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              Html
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              Css
            </span>
            <span className="text-sm px-3 py-1 border border-green-400 text-green-400">
              Mongo DB
            </span>
          </div>
        </div>
        <div className="border border-yellow-400 p-4 bg-black">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">FRAMEWORKS</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-yellow-400 text-yellow-400">
              React
            </span>
            <span className="text-sm px-3 py-1 border border-yellow-400 text-yellow-400">
              Node.js
            </span>
            <span className="text-sm px-3 py-1 border border-yellow-400 text-yellow-400">
              Express.js
            </span>
            <span className="text-sm px-3 py-1 border border-yellow-400 text-yellow-400">
              Tailwind CSS
            </span>
          </div>
        </div>
        <div className="border border-red-400 p-4 bg-black">
          <h3 className="text-xl font-bold mb-4 text-red-400">TOOLS</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-red-400 text-red-400">
              Postman
            </span>
            <span className="text-sm px-3 py-1 border border-red-400 text-red-400">
              Git
            </span>
            <span className="text-sm px-3 py-1 border border-red-400 text-red-400">
              VS Code
            </span>
            <span className="text-sm px-3 py-1 border border-red-400 text-red-400">
              Chrome Dev Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
