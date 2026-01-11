import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // SİMULASİYA: Burada normalda sənin Login API-ın olacaq
    console.log("Logging in...");

    // 1. Giriş uğurlu olandan sonra LocalStorage-ı yoxlayırıq
    const savedBook = localStorage.getItem('pendingBook');

    if (savedBook) {
      const bookData = JSON.parse(savedBook);
      alert(`Welcome back! Your book "${bookData.title}" has been successfully submitted for approval.`);
      
      // 2. Məlumatı istifadə etdikdən sonra təmizləyirik
      localStorage.removeItem('pendingBook');
      
      // 3. Əsas səhifəyə və ya Seller panelinə yönləndiririk
      navigate('/seller'); 
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex w-full h-screen bg-black text-white overflow-hidden font-bona">
      {/* SOL TƏRƏF - ŞƏKİL */}
      <div className="hidden md:block md:w-[400px] lg:w-[572px] flex-shrink-0 relative h-full">
        <img src="/login.png" alt="Login" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* SAĞ TƏRƏF - FORM */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-24 h-full bg-[#050505]">
        <div className="max-w-lg w-full mx-auto md:ml-auto md:mr-20 py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#CC9600] mb-8 leading-tight">Welcome to <br /> Neth BookPoint!</h1>
          
          <form className="flex flex-col gap-6" onSubmit={handleLoginSubmit}>
            <div className="relative group">
              <input type="email" placeholder="Enter Email" className="w-full bg-[#C8C27E] text-black placeholder-gray-700 px-5 py-4 rounded-xl outline-none" required />
              <MdAlternateEmail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800 text-xl" />
            </div>

            <div className="relative group">
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password" className="w-full bg-[#C8C27E] text-black placeholder-gray-700 px-5 py-4 rounded-xl outline-none" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-800 text-xl">
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 border-b border-gray-800 pb-6 gap-2">
              <span className="text-gray-400 text-sm">Don't you have an account?</span>
              <Link to="/register" className="text-[#CC9600] font-bold hover:underline text-sm uppercase">Create an account</Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-6">
              <button type="button" className="flex items-center gap-3 text-white group">
                <div className="w-8 h-8 bg-white rounded-full p-1"><img src="/google-icon.png" alt="G" /></div>
                <span className="text-sm font-semibold border-b border-transparent group-hover:border-gray-400">Login with Google</span>
              </button>

              <button type="submit" className="bg-[#CC9600] text-white font-black py-4 px-12 rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;