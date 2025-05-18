import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-x-hidden">
        <div className="flex">
          

          <main className="flex-1 h-[41rem] p-3">
            <div className="border">
              <div className="h-158 p-2 overflow-auto">
                
                <Outlet/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
