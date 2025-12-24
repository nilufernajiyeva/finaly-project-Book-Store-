// src/components/UI/Button.jsx
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-[191px] h-[43px]
        bg-black
        border-[1.5px] border-[#CC9600]
        text-[#CC9600]
        text-sm
        tracking-widest
        rounded-[5px]
        flex items-center justify-center
        hover:bg-[#CC9600] hover:text-black
        transition-all duration-300
      "
    >
      {children}
    </button>
  );
};

export default Button;
