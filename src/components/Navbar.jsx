import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [initial, setInitial] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // for outside click
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    const userData = JSON.parse(localStorage.getItem("user"));

    setIsLoggedIn(!!token);
    setRole(userRole);

    if (userData && userData.name) {
      setInitial(userData.name.charAt(0).toUpperCase());
    }
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate("/");
    setShowDropdown(false);
  };

  const handleLikedSongs = () => {
    navigate("/liked-songs");
    setShowDropdown(false);
  };

  const navLinks = (
    <div className='flex justify-between items-center'>

      {isLoggedIn && role === "admin" && (
        <li>
          <Link to="/upload" className="mr-4 text-violet-300 hover:underline">Upload</Link>
        </li>
      )}

      {!isLoggedIn ? (
        <>
          <li>
            <Link to="/signup" className='mr-4'>Signup</Link>
          </li>
          <li>
            <Link to="/login" className='px-3 py-2 bg-violet-200 text-violet-500 rounded-[3rem] hover:bg-purple-300'>Login</Link>
          </li>
        </>
      ) : (
        <li className="relative" ref={dropdownRef}>
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-14 h-10 flex justify-center  items-center cursor-pointer rounded-full bg-violet-400 text-white font-bold hover:border"
          >
            {initial}
            <svg className="w-4 h-4 text-white ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-36 bg-violet-400 rounded-md shadow-lg z-50">
            <span
              onClick={handleLikedSongs}
              className="block w-full text-left px-4 py-2 text-gray-800 cursor-pointer  rounded-md hover:text-white hover:border hover:border-white"
            >
              Liked Songs
            </span>
            <Link to="/setting" className='block w-full text-left px-4 py-2 text-gray-800 cursor-pointer  rounded-md hover:text-white hover:border hover:border-white'>Setting</Link>
            <span
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-gray-800 cursor-pointer hover:bg-red-400 hover:text-white hover:border hover:border-white"
            >
              Logout
            </span>
          </div>
          
          )}
        </li>
      )}
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 w-[100vw] text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Part */}
        <div className='flex items-center space-x-[5px]'>
        <Link to="/">
            <svg className='w-6 fill-violet-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z"/></svg>
          </Link>
          <Link to="/" className="text-2xl font-bold hidden md:flex text-violet-400">uMusic</Link>
          
        </div>
        <ul className="font-medium">
          {navLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
