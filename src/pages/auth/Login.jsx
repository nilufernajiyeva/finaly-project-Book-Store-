import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!registeredUser) {
      alert("Please register first!");
      navigate("/register");
      return;
    }

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      email !== registeredUser.email ||
      password !== registeredUser.password
    ) {
      alert("Wrong email or password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));

    navigate("/seller");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleLoginSubmit} className="w-[400px] space-y-5">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-4 text-black"
        />

        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-4 text-black"
        />

        <button className="bg-yellow-500 w-full p-4">Login</button>

        <Link to="/register" className="text-yellow-400 block text-center">
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Login;
