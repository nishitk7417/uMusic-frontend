import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from './pages/Home.jsx';
import Upload from "./pages/Upload.jsx";
import Songs from "./pages/songs.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Router>
      <div className="">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/upload" element={<Upload/>} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
        <MusicPlayer/>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
