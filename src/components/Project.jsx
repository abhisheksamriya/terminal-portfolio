import React from "react";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import onepiece from "../assests/onepiece.png";
import PocketMind from "../assests/pocketmind.png";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-16 border-b border-green-700 mb-12 scroll-mt-8"
    >
      <h2 className="text-3xl font-bold mb-8 glitch text-red-400">
        <span>PROJECTS</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <div className="transform hover:scale-[1.02] transition-all duration-300 w-full">
          <article className="relative border border-green-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500 bg-black h-full">
            <div className=" bg-black relative overflow-hidden">
              <img
                src={PocketMind}
                alt="terminal"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className=" p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-green-400">
                PocketMind
              </h3>
              <p className="text-sm sm:text-base text-green-200 mb-4 line-clamp-2">
                PocketMind is a web application that helps you save, organize,
                and manage your important links from platforms like YouTube,
                Twitter, LinkedIn, and more. Built with a clean, modern UI and a
                secure backend, PocketMind acts as your digital brain to collect
                and store important resources.
              </p>
              <div className="sm:flex sm:justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    NodeJs
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    Express
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    MongoDb
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    React
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    TypeScript
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    Tailwindcss
                  </span>
                </div>
                <div className="flex flex-wrap justify-start gap-3">
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/abhisheksamriya/pocket-mind"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Source Code
                    <LuGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </article>
        </div>
        <div className="transform hover:scale-[1.02] transition-all duration-300 w-full">
          <article className="relative border border-green-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500 bg-black h-full">
            <div className=" bg-black relative overflow-hidden">
              <img
                src={onepiece}
                alt="onepiece game"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-green-400">
                OnePiece Memory Game
              </h3>
              <p className="text-sm sm:text-base text-green-200 mb-4 line-clamp-2">
                A fun and engaging memory game inspired by One Piece. Built with
                modern web technologies, featuring dynamic gameplay, character
                matching, and smooth animations for an enjoyable user experience
              </p>
              <div className="sm:flex sm:justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    JavaScript
                  </span>
                  <span className="text-xs px-2 py-1 border border-green-700 text-green-400">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex flex-wrap justify-start gap-3">
                  <a
                    href="https://onepiece-memory-game-nine.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/abhisheksamriya/one-piece-game"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Source Code
                    <LuGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Project;
