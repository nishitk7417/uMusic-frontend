import { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [initial, setInitial] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    const userData = JSON.parse(localStorage.getItem("user"));
    
    setIsLoggedIn(!!token);
    setRole(userRole);

    if (userData && userData.name) {
      setInitial(userData.name.charAt(0).toUpperCase()); // Get first letter
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const navLinks = (
    <div className='flex justify-between items-center'>
      <li>
        <Link to="/songs" className='mr-4' onClick={() => setIsOpen(false)}>Songs</Link>
      </li>

      {isLoggedIn && role === "admin" && (
    <li>
      <Link to="/upload" className="mr-4 text-violet-300 hover:underline" onClick={() => setIsOpen(false)}>Upload</Link>
    </li>
      )}

      {!isLoggedIn ? (
        <>
          <li>
            <Link to="/signup" className='mr-4' onClick={() => setIsOpen(false)}>Signup</Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)} className='px-3 py-2 bg-violet-200 text-violet-500 rounded-[3rem] hover:bg-purple-300'>Login</Link>
          </li>
        </>
      ) : (
        <>
          <li className="mr-4">
            <div className="w-10 h-10 flex justify-center cursor-pointer items-center rounded-full bg-violet-400 text-white font-bold hover:border">
              {initial}
            </div>
          </li>
          <li>
            <button onClick={handleLogout} className="px-3 py-2 bg-red-400 text-white rounded-[3rem]">
              Logout
            </button>
          </li>
        </>
      )}
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-gray-900 fixed to-gray-800 w-[100vw] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className='w-10 flex justify-between items-center'>
          <Link to="/" className="text-2xl font-bold text-violet-400">uMusic</Link>
          <Link to="/" className="px-2 py-[9px] bg-violet-200 ml-5 rounded-[3rem] hover:bg-purple-700">
          <svg className='w-6 fill-violet-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">{navLinks}</ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-center font-medium text-white bg-gray-800 rounded-md py-4">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
