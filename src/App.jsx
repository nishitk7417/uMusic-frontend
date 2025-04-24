import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Home from './pages/Home.jsx';
// // Page Components (create these as separate components later)

// import Songs from './pages/Songs';
// import Upload from './pages/Upload';
// import Liked from './pages/Liked';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="">
        <Routes>
           <Route path="/" element={<Home />} />
          {/*<Route path="/songs" element={<Songs />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
