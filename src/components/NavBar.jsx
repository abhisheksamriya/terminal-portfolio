import { useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";


const NavBar = () => {
  const [toggle ,setToggle] = useState(false);
  const [isActive, setIsActive] = useState("");
  return (
    <>
      <nav className="fixed top-0 left-0 bottom-0 w-64 bg-black border-r border-green-400 z-50 overflow-y-auto hidden md:block">
        <div className="p-6">
          <div className="text-2xl font-bold glitch mb-8">
            <span className="text-yellow-600 cursor-pointer"><a href="#head">abhishek</a></span>
          </div>
          <div className="space-y-2">
            <a
              href="#about"
              onClick={()=>setIsActive("about")}
              className= {`block px-4 py-2 border border-transparent hover:border-green-400 transition-colors text-gray-500 ${isActive==="about"?"text-green-400":"text-gray-500"}`}
            >
              <span className="mr-2">&gt;</span>ABOUT
            </a>
            <a
              href="#skills"
              onClick={()=>setIsActive("skills")}
              className= {`block px-4 py-2 border border-transparent hover:border-green-400 transition-colors text-gray-500 ${isActive==="skills"?"text-green-400":"text-gray-500"}`}
            >
              <span className="mr-2">#</span>SKILLS
            </a>
            <a
              href="#certificates"
              onClick={()=>setIsActive("certificates")}
              className= {`block px-4 py-2 border border-transparent hover:border-green-400 transition-colors text-gray-500 ${isActive==="certificates"?"text-green-400":"text-gray-500"}`}
            >
              <span className="mr-2">@</span>Certificates
            </a>
            <a
              href="#projects"
              onClick={()=>setIsActive("projects")}
              className= {`block px-4 py-2 border border-transparent hover:border-green-400 transition-colors text-gray-500 ${isActive==="projects"?"text-green-400":"text-gray-500"}`}
            >
              <span className="mr-2">$</span>PROJECTS
            </a>
          </div>
          <div className="mt-8 pt-5 border-t border-green-700">
          <a
              href="https://github.com/abhisheksamriya"
              target="_blank"
              className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
            >
              <span>&gt;</span>
              <LuGithub />
              <span>github</span>
            </a> 
            <a
              href="https://twitter.com/AbhiSamriya"
              target="_blank"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 mt-2"
            >
              <span>&gt;</span>
              <FaXTwitter />
              <span>twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-samriya-099921300"
              target="_blank"
              className="text-sm text-red-500 hover:text-red-400 transition-colors flex items-center gap-2 mt-2"
            >
              <span>&gt;</span>
              <FaLinkedinIn />
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </nav>
      <nav className="fixed top-0 left-0 right-0 bg-black border-b border-green-400 z-50 p-4 md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold glitch">
            <span text-green-400><a href="#head">abhishek</a></span>
          </div>
          <div className="text-green-400">
            <button onClick={()=>setToggle(!toggle)}>{toggle ? <IoClose /> :<MdOutlineMenu />}</button>
          </div>
          <div className={`bg-black absolute right-0 top-17 p-10 flex flex-col space-y-2 rounded-md ${toggle ? "block":"hidden"}` } onClick={()=>setToggle(!toggle)}>
          <a href="#about" className="text-green-400">
              About
            </a>
            <a href="#skills" className="text-gray-500">
              Skills
            </a>
            <a href="#certificates" className="text-gray-500">
              Certificates
            </a>
            <a href="#projects" className="text-gray-500">
              Projects
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
