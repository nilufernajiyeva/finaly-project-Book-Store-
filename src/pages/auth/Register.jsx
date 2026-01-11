import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash, FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    const savedBook = localStorage.getItem('pendingBook');
    if (savedBook) {
      alert("Account created! Your book data is saved. Please login to publish it.");
    } else {
      alert("Registration successful! Now you can login.");
    }
    navigate('/login');
  };

  return (
    <div className="flex w-full h-screen bg-black text-white overflow-hidden font-bona">

      <div className="hidden md:block md:w-[400px] lg:w-[572px] flex-shrink-0 relative h-full">
        <img 
          src="/login.png" 
          alt="Signup illustration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-24 h-full overflow-hidden bg-[#050505]">
        <div className="max-w-lg w-full mx-auto md:ml-auto md:mr-20 py-10">
          
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#CC9600] mb-4 leading-tight">
              Welcome to <br className="hidden md:block" /> Neth BookPoint!
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              Discover a seamless way to sell your books and unlock exclusive benefits. 
              Enjoy a hassle-free experience.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-[#CC9600] mb-8 text-center md:text-left">
            Create Your Account!
          </h2>
          <form className="flex flex-col gap-6" onSubmit={handleRegister}>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-[#C8C27E] text-black placeholder-gray-700 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9600] transition-all font-medium"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
              <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800 text-xl" />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full bg-[#C8C27E] text-black placeholder-gray-700 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9600] transition-all font-medium"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <MdAlternateEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800 text-xl" />
            </div>

            <div className="relative group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create Password" 
                className="w-full bg-[#C8C27E] text-black placeholder-gray-700 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CC9600] transition-all font-medium"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800 text-xl cursor-pointer hover:text-black transition-colors"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 border-b border-gray-800 pb-6 gap-2">
              <span className="text-gray-400 text-sm">Already have an account?</span>
              <Link 
                to="/login" 
                className="text-[#CC9600] font-bold hover:underline text-sm uppercase tracking-wide"
              >
                Login here
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-6">
              
              <button 
                type="button" 
                className="flex items-center justify-center gap-3 text-white hover:text-gray-300 transition group w-full sm:w-auto"
              >
                <div>
                  <img 
                    src="/google-icon.png" 
                    alt="Google" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-sm font-semibold border-b border-transparent group-hover:border-gray-400">
                  Sign up with Google
                </span>
              </button>
              <button 
                type="submit" 
                className="bg-[#CC9600] hover:bg-[#B38500] text-white font-black py-4 px-12 rounded-full shadow-lg transition transform hover:scale-105 active:scale-95 w-full sm:w-auto uppercase tracking-widest text-sm"
              >
                SIGN UP
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;