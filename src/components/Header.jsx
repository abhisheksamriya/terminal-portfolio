import React from "react";

const Header = () => {
  return (
    <div id="head" className="border border-green-400 p-4 mb-12 bg-black hidden md:block">
      <div className="flex justify-between items-center">
        <div className="text-green-400">
          <div className="terminal-cursor mb-1">&gt; Current Working Project...</div>
          <div className="text-sm text-green-300">Building Ecommerce Store</div>
        </div>
        <div className="text-yellow-400">&gt; WelCome to my Portfolio</div>
        <div className="text-red-400">
          <div className="terminal-cursor mb-1">&gt; Stephen Hawking:</div>
          <div className="text-sm text-red-300 typing-effect">
            "Intelligence is the ability to adapt to change"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
