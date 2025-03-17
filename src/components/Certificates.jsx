import React from "react";
import harkirat from "../assests/harkirat.jpg"
import geek from "../assests/download.png"


const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-16 border-b border-green-700 mb-12 scroll-mt-8"
    >
      <h2 className="text-3xl font-bold mb-12 glitch text-yellow-400">
        <span>Certificates</span>
      </h2>
      <div className="space-y-6 sm:space-y-8">
        <div className="border-2 border-yellow-400 p-4 sm:p-8 bg-black/80 backdrop-blur-sm hover:border-yellow-300 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="relative group">
                <img
                  src={harkirat}
                  alt="100x logo"
                  className="w-16 sm:w-20 h-16 sm:h-20 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-400">
                  Web Dev + DevOps + Web3/BlockChain
                </h3>
                <p className="text-base sm:text-lg text-yellow-300">
                  100xDevs By Harkirat Singh
                </p>
              </div>
            </div>
            <span className="text-base sm:text-lg font-mono text-yellow-400">
              August 2024 - continued
            </span>
          </div>
          <ul className="space-y-3 text-yellow-200 ml-4">
            <li className="terminal-cursor flex items-start gap-2 text-sm sm:text-base">
              <span className="text-yellow-400">&gt;</span>
              <span>Acquired practical experience in Web Development</span>
            </li>
            <li className="terminal-cursor flex items-start gap-2 text-sm sm:text-base">
              <span className="text-yellow-400">&gt;</span>
              <span>
                Gained knowledge about Web Dev Devops and
                Web3
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
