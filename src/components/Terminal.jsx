import React, { useState, useRef, useEffect } from "react";
import { href, Link, useNavigate } from "react-router";


const commands = {
  start : `
    ${window.innerWidth < 640 ? '' : `
 █████╗ ██████╗ ██╗  ██╗██╗███████╗██╗  ██╗███████╗██╗  ██╗    
██╔══██╗██╔══██╗██║  ██║██║██╔════╝██║  ██║██╔════╝██║ ██╔╝    
███████║██████╔╝███████║██║███████╗███████║█████╗  █████╔╝     
██╔══██║██╔══██╗██╔══██║██║╚════██║██╔══██║██╔══╝  ██╔═██╗     
██║  ██║██████╔╝██║  ██║██║███████║██║  ██║███████╗██║  ██╗    
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    
`}
For the List of available commands, type help

` ,
  help: `${window.innerWidth > 640 ? `         
         whois         Who is Abhishek?
         date          Show the Today's date and time
         quote         Generate a Random Quotes
         linkedin      Show Abhishek's Linkedin account
         twitter       Show Abhishek's Twitter account
         github        Show Abhishek's Github account
         projects      View Coding Projects
         help          You obviously know what this does
         clear         Clear the terminal 
         exit          Exit the terminal`:`
         Available Commands : 
         whois
         date
         quote
         linkedin
         twitter
         github
         projects
         help
         clear
         exit`}`,
  whois :
    "Hi! I'm Abhishek, a passionate developer skilled in React, Node.js, and full-stack development.",
  projects:
    "1. Travel List App | 2. One Piece Memory Game | 3. The Clean Sphere Landing Page | 4. Terminal Portfolio",
  github : `url("abhsihek")`,
  date : `${new Date()}` ,
};

const Terminal = () => {
  const [history, setHistory] = useState([commands[`start`]]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);
  const focusRef = useRef(null);
  const navigate = useNavigate();
  const [quote,setQuote] = useState('');

  const handleCommand = () => {
    if (input === "clear") {
      setHistory([]);
    }
    else if(input===""){
      setHistory([...history,`$ ${input}`,"Please enter a command, For the list of command, type 'help'"])
    }
    else if (input === "exit"){
      navigate("/");
    }
    else if(input === "quote"){
      setHistory([...history,`$ ${input}`,quote]);
    }else if(input === "linkedin"){
      window.open("https://www.linkedin.com/in/abhishek-samriya-099921300","_blank")
    }else if(input === "github"){
      window.open("https://github.com/abhisheksamriya","_blank")
    }else if(input === "twitter"){
      window.open("https://twitter.com/AbhiSamriya","_blank")
    }
     else {
      setHistory([...history, `$ ${input}`, commands[input] || `Command ${input} not found, For the list of commands, type help`]);
    }
    setInput("");
  };


  useEffect(()=>{
    async function quoteData (){
      const res = await fetch(`https://dummyjson.com/quotes/${Math.floor(Math.random()*30)}`);
      const data = await res.json();
      setQuote(data.quote);
    }
    quoteData();
  },[input==="quote"])

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history,quote]);

  return (
    <div className="bg-black text-green-400 min-h-screen p-2 sm:p-6 font-mono flex justify-center items-center" onClick={()=>focusRef.current.focus()} >
      <div className="w-full max-w-xl sm:max-w-3xl bg-gray-950 p-4 sm:p-6 rounded-lg shadow-lg border border-green-700 h-90 sm:h-140 overflow-y-scroll scrollbar-none" ref={terminalRef}>
        {history.map((line, index) => (
          <div key={index} className="text-xs whitespace-pre-wrap sm:text-sm">{line}</div>
        ))}
        <div className="flex items-center mt-2">
          <span className="text-green-500 mr-2">$</span>
          <input
            className="bg-transparent outline-none text-green-400 w-full caret-green-500"
            ref={focusRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;