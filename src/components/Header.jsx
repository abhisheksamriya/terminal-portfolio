import React from "react";

const Header = () => {
  return (
    <div
      id="head"
      className="border border-green-400 p-4 mb-12 bg-black hidden md:block"
    >
      <div className="flex justify-between items-center">
        <div className="text-green-400">
          <div className="terminal-cursor mb-1">&gt; Current Status...</div>
          <div className="text-sm text-green-300">Freelancing..</div>
        </div>
        <div className="text-yellow-400">&gt; WelCome to my Portfolio</div>
        <div className="text-red-400">
          <div className="terminal-cursor mb-1">&gt; Nikola Tesla:</div>
          <div className="text-sm text-red-300 typing-effect">
            "I don't care that they stole my idea
            <br />I care that they don't have any of their own"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
