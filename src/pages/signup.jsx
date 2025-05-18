import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/users/register`, formData, {
        withCredentials: true
      });

      if (response.status === 201) {
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => {
          navigate("/login"); // Navigate to login page
        }, 1000); // Optional delay for user feedback
      } else {
        setMessage("Signup failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 mx-4 space-y-4 bg-gray-800 flex flex-col items-center rounded shadow-md">
        <Link to="/">
          <svg className='w-6 fill-violet-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z"/></svg>
        </Link>
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        {message && <p className="text-center text-sm text-yellow-400">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-[6px] space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 py-2 rounded text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-violet-400 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
