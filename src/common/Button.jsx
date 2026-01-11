import React from 'react';

const PrimaryButton = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-10 py-3 bg-[#CC9600] text-black font-bold rounded-lg hover:bg-[#b38300] transition-all duration-300 font-bona ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;