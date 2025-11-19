import { useState } from "react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("");

  return (
    <>
      {/* ----- Desktop Sidebar ----- */}
      <nav className="fixed top-0 left-0 bottom-0 w-64 bg-black border-r border-green-400 z-50 overflow-y-auto hidden md:block">
        <div className="p-6">
          <div className="text-2xl font-bold glitch mb-8">
            <span className="text-yellow-600 cursor-pointer">
              <a href="#head">abhishek</a>
            </span>
          </div>

          {/* Links */}
          <div className="space-y-2">
            {[
              { id: "about", label: "ABOUT", icon: ">" },
              { id: "skills", label: "SKILLS", icon: "#" },
              { id: "certificates", label: "CERTIFICATES", icon: "@" },
              { id: "projects", label: "PROJECTS", icon: "^" },
              { id: "remote", label: "REMOTE WORKS", icon: "$" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsActive(item.id)}
                className={`block px-4 py-2 border border-transparent hover:border-green-400 transition-colors ${
                  isActive === item.id ? "text-green-400" : "text-gray-500"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-8 pt-5 border-t border-green-700">
            <a
              href="https://github.com/abhisheksamriya"
              target="_blank"
              className="text-sm text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
            >
              <span>&gt;</span>
              <LuGithub />
              github
            </a>

            <a
              href="https://twitter.com/AbhiSamriya"
              target="_blank"
              className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 mt-2"
            >
              <span>&gt;</span>
              <FaXTwitter />
              twitter
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-samriya-099921300"
              target="_blank"
              className="text-sm text-red-500 hover:text-red-400 flex items-center gap-2 mt-2"
            >
              <span>&gt;</span>
              <FaLinkedinIn />
              Linkedin
            </a>
          </div>
        </div>
      </nav>

      {/* ----- Mobile Navbar ----- */}
      <nav className="fixed top-0 left-0 right-0 bg-black border-b border-green-400 z-50 p-4 md:hidden">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold glitch">
            <span className="text-green-400">
              <a href="#head">abhishek</a>
            </span>
          </div>

          <button className="text-green-400" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoClose /> : <MdOutlineMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`bg-black absolute right-0 top-16 p-10 flex flex-col space-y-4 rounded-md border border-green-400 transition-all ${
            toggle ? "block" : "hidden"
          }`}
        >
          <a href="#about" className="text-green-400">
            About
          </a>
          <a href="#skills" className="text-gray-400">
            Skills
          </a>
          <a href="#certificates" className="text-gray-400">
            Certificates
          </a>
          <a href="#projects" className="text-gray-400">
            Projects
          </a>
          <a href="#remote" className="text-gray-400">
            Remote Works
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
