import { Link } from "react-router";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-green font-mono relative">
      {/* right part of the screen navbar */}
      <NavBar/>
      {/* left part main  */}
      <MainContent/>
    </div>
  );
};

export default Home;
