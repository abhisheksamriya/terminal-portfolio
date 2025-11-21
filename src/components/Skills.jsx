import React from "react";

const Skills = () => {
  const languages = ["JavaScript", "TypeScript", " C++", "C", "Html", "Css"];
  const frameworks = ["Next.js", "React", "Express.js", "Tailwind CSS"];
  const tools = ["Postman", "Git", "Vs code", "MongoDB Compass"];
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
            {languages.map((language) => (
              <span
                key={language}
                className="text-sm px-3 py-1 border border-green-400 text-green-400"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-yellow-400 p-4 bg-black">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">FRAMEWORKS</h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 border border-yellow-400 text-yellow-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-red-400 p-4 bg-black">
          <h3 className="text-xl font-bold mb-4 text-red-400">TOOLS</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 border border-red-400 text-red-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
