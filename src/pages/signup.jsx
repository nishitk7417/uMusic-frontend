import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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
      const response = await axios.post("/api/v1/users/register", formData, {
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
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        {message && <p className="text-center text-sm text-yellow-400">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
