import { CiMail } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { useNavigate } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const navigate = useNavigate();
  return (
    <section
      id="about"
      className="py-8 sm:py-20 border-b border-green-700 mb-8 sm:mb-16 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-xs sm:text-sm text-green-400 mb-2">
            SYSTEM ADMIN:
          </div>
          <pre className="text-[6px] sm:text-sm md:text-md lg:text-lg xl:text-xl font-mono text-yellow-400 leading-none whitespace-pre-wrap">
            {`
 █████╗ ██████╗ ██╗  ██╗██╗███████╗██╗  ██╗███████╗██╗  ██╗    
██╔══██╗██╔══██╗██║  ██║██║██╔════╝██║  ██║██╔════╝██║ ██╔╝    
███████║██████╔╝███████║██║███████╗███████║█████╗  █████╔╝     
██╔══██║██╔══██╗██╔══██║██║╚════██║██╔══██║██╔══╝  ██╔═██╗     
██║  ██║██████╔╝██║  ██║██║███████║██║  ██║███████╗██║  ██╗    
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    
`}
          </pre>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="flex flex-col items-start">
            <p className="text-base sm:text-lg mb-10 sm:mb-6 text-green-300 h-32">
              <Typewriter
                words={[
                  "Aspiring developer passionate about building innovative and efficient solutions. I enjoy creating impactful projects that blend creativity, scalability, and real-world problem-solving.",
                ]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </p>
            <div className="space-y-2 text-sm sm:text-base text-red-300">
              <p className="terminal-cursor">&gt; Location: India, Rajasthan</p>
              <p className="terminal-cursor">
                &gt; Learning: Development + Web3
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1n-3Z_vcDzIaW_36mNmi6Le7l4byERYzR/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-red-400 text-red-400 px-4 py-2 hover:bg-red-400 hover:text-black transition-colors w-full sm:w-auto rounded-xl"
              >
                <FaExternalLinkAlt />
                RESUME.pdf
              </a>
              <a
                href="mailto:abhisheksamriya2024@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-green-400 text-green-400 px-4 py-2 hover:bg-green-400 hover:text-black transition-colors w-full sm:w-auto rounded-xl"
              >
                <CiMail />
                CONTACT.exe
              </a>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-green-700 pt-6 md:pt-0 md:pl-8 space-y-4 sm:space-y-6">
            <a
              href="https://github.com/abhisheksamriya"
              target="_blank"
              className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
            >
              <LuGithub className="h-6 w-6" />
              <span className="text-base sm:text-lg">GITHUB.profile</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-samriya-099921300"
              target="_blank"
              className="flex items-center gap-3 text-[#FFA116] hover:text-[#FFA116]/80 transition-colors"
            >
              <FaLinkedinIn className="h-6 w-6" />
              <span className="text-base sm:text-lg">LINKEDIN.network</span>
            </a>
            <a
              href="https://twitter.com/AbhiSamriya"
              target="_blank"
              className="flex items-center gap-3  text-red-500 hover:text-red-400 transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="text-base sm:text-lg">Twitter.link</span>
            </a>
            <a
              href="https://leetcode.com/u/abhisheksamriya/"
              target="_blank"
              className="flex items-center gap-3  text-pink-500 hover:text-pink-300 transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="text-base sm:text-lg">LEETCODE.solve</span>
            </a>
            <button
              className="w-full bg-[#000a1a] border border-blue-900 p-4 text-blue-500 hover:text-blue-400 transition-colors rounded-2xl text-lg font-mono cursor-pointer"
              onClick={() => navigate("/terminal")}
            >
              <div className="flex items-center gap-3">
                <span>&gt;</span>
                <span>OPEN_TERMINAL</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
