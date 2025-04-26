import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from './pages/Home.jsx';
import Upload from "./pages/Upload.jsx";
import Songs from "./pages/songs.jsx";
// // Page Components (create these as separate components later)

// import Liked from './pages/Liked';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="">
        <Routes>
           <Route path="/" element={<Home />} />
          {/*
          <Route path="/upload" element={<Upload />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/upload" element={<Upload/>} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
