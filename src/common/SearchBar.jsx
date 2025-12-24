import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center w-full border border-[#CC9600]/70 rounded-[10px] p-1.5 bg-black/20 backdrop-blur-sm font-bona">
      {/* Yazı yazılan hissə */}
      <input
        type="text"
        placeholder="Search a Book"
        className="flex-1 bg-transparent text-white px-5 outline-none placeholder:text-gray-400 text-[16px] tracking-[0.02em]"
      />

      {/* Axtarış düyməsi */}
      <button className="bg-[#413115] hover:bg-[#5a441d] text-white px-10 py-2.5 rounded-[10px] transition-all duration-300 font-semibold text-[16px] border border-[#CC9600]/50 tracking-[0.02em]">
        Search
      </button>
    </div>
  );
}

export default SearchBar;