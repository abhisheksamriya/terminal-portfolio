import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import Neptura from "../assests/neptura.png";
import Birla from "../assests/birla.png";

const RemoteWork = () => {
  return (
    <section
      id="remote"
      className="py-16 border-b border-green-700 mb-12 scroll-mt-8"
    >
      <h2 className="text-3xl font-bold mb-8 glitch text-slate-400">
        <span>Remote Works</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        <WorkCard
          name="Neptura"
          description="Neptura is A digital marketing agency landing page."
          link="https://www.neptura.online/"
          img={Neptura}
        />
        <WorkCard
          name="Birla Dharamshala"
          description="Birla Dharamshala is a hotel landing page."
          link="https://www.birladhramshalaayodhya.in/"
          img={Birla}
        />
      </div>
    </section>
  );
};

const WorkCard = ({ name, description, link, img }) => {
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
          <div className="flex justify-between">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-green-400">
              {name}
            </h3>
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              Live Demo
              <FaExternalLinkAlt />
            </a>
          </div>
          <p className="text-sm sm:text-base text-green-200 mb-4 line-clamp-2">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default RemoteWork;
