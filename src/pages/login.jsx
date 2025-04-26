import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const res = await axios.post(
        "/api/v1/users/login",
        formData,
        { withCredentials: true }
      );

      const { accessToken, user } = res.data?.data || {};
      console.log(res.data);     

      if (accessToken && user) {
        // Store token & role in localStorage
        localStorage.setItem("token", accessToken);
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", JSON.stringify(user));

        setMessage("Login successful!");

        // Redirect based on role
        if (user.role === "admin") {
          navigate("/");
        } else {
          navigate("/");
        }
      } else {
        setMessage("Invalid response from server");
      }
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded shadow-md">
        <Link to="/" className="">
          <svg className='w-6 fill-violet-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
        </Link>
        <h2 className="text-2xl font-semibold text-center">Log In</h2>
        {message && <p className="text-center text-sm text-yellow-400">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Log In
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-violet-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
