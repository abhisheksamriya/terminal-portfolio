import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import onepiece from "../assests/onepiece.png";
import PocketMind from "../assests/pocketmind.png";
import MysteryMates from "../assests/MysteryMates.png";
import dnd from "../assests/dnd.png";
import resort from "../assests/resort.png";
import terminal from "../assests/termi.png";

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
        <ProjectCard
          img={PocketMind}
          name={"PocketMind"}
          description={
            "PocketMind is a web application that helps you save, organize,and manage your important links from platforms like YouTube,Twitter, LinkedIn, and more. Built with a clean, modern UI and a secure backend, PocketMind acts as your digital brain to collect and store important resources"
          }
          liveLink={"https://pocket-mind.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/pocket-mind"}
          skills={[
            "NodeJs",
            "Express",
            "MongoDb",
            "React",
            "TypeScript",
            "Tailwindcss",
          ]}
        />
        <ProjectCard
          img={MysteryMates}
          name={"MysteryMates"}
          description={
            " MysteryMates is a real-time private chat platform where users can instantly join a room and start chatting anonymously."
          }
          liveLink={"https://mystery-mates.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/MysteryMates"}
          skills={[
            "NodeJs",
            "WebSockets",
            "React",
            "TypeScript",
            "Tailwindcss",
          ]}
        />
        <ProjectCard
          img={dnd}
          name={"Task Board"}
          description={" A task board like Kanban Board using DND Kit."}
          liveLink={"https://dnd-taskboard.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/dnd-board"}
          skills={["React", "TypeScript", "Dndkit", "Tailwindcss"]}
        />
        <ProjectCard
          img={resort}
          name={"Resort Landing Page"}
          description={"A resort website landing page."}
          liveLink={"https://discover-resort.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/resort-website"}
          skills={["NextJs", "TypeScript", "Tailwindcss"]}
        />
        <ProjectCard
          img={terminal}
          name={"Terminal Portfolio"}
          description={
            " A terminal-style personal portfolio website, designed to look and feel like a real terminal. Built with React and Tailwind CSS."
          }
          liveLink={"https://terminal-portfolio-orpin-nu.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/terminal-portfolio"}
          skills={["React", "JavaScript", "Tailwindcss"]}
        />
        <ProjectCard
          img={onepiece}
          name={"OnePiece Memory Game"}
          description={
            " A fun and engaging memory game inspired by One Piece. Built with modern web technologies, featuring dynamic gameplay, character matching, and smooth animations for an enjoyable user experience"
          }
          liveLink={"https://onepiece-memory-game-nine.vercel.app/"}
          githubLink={"https://github.com/abhisheksamriya/onepiece-memory-game"}
          skills={["React", "JavaScript", "Tailwindcss"]}
        />
      </div>
    </section>
  );
};

const ProjectCard = ({
  img,
  name,
  description,
  liveLink,
  githubLink,
  skills,
}) => {
  return (
    <div className="transform hover:scale-[1.02] transition-all duration-300 w-full">
      <article className="relative border border-green-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500 bg-black h-full">
        <div className=" bg-black relative overflow-hidden">
          <img
            src={img}
            alt="terminal"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className=" p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-green-400">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-green-200 mb-4 line-clamp-2">
            {description}
          </p>
          <div className="sm:flex sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2 py-1 border border-green-700 text-green-400"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-start gap-3">
              <a
                href={liveLink}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
              >
                Live Demo
                <FaExternalLinkAlt />
              </a>
              <a
                href={githubLink}
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
  );
};

export default Project;
