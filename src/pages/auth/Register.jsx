import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Fill all fields!");
      return;
    }

    localStorage.setItem("registeredUser", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <form onSubmit={handleRegister} className="w-[400px] space-y-5">
        <input
          placeholder="Full name"
          className="w-full p-4 text-black"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <input
          placeholder="Email"
          className="w-full p-4 text-black"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-4 text-black"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <button className="bg-yellow-500 w-full p-4">Register</button>

        <Link to="/login" className="text-yellow-400 block text-center">
          Go to login
        </Link>
      </form>
    </div>
  );
};

export default Register;
