import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    
    <>
    <Navbar/>
    <div className="min-h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="text-center px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-violet-400">
          Welcome to uMusic 🎵
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Discover, stream, and enjoy your favorite songs. Your music universe starts here.
        </p>

        <Link to="/songs">
          <button className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-[3rem] transition duration-300">
            Explore Songs
          </button>
        </Link>
      </div>
    </div></>
  );
};

export default Home;
