import React from 'react';
import SearchBar from "../common/SearchBar"; 

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-[600px] h-[85vh] flex flex-col items-center justify-start pt-3 text-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/herobg.png')",
      }}
    >
      <div className="relative z-10 px-4 flex flex-col items-center gap-6">
        <h1 className="text-[20px] md:text-[48px] font-bona font-bold text-[#FA9021] tracking-[0.02em] leading-tight drop-shadow-lg">
          The Book Lover's Dreamland Awaits!
        </h1>
        
<p className="text-white font-bona text-[20px] font-normal  tracking-[0.02em] max-w-[850px] opacity-100">
  Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.
</p>

        <div className="w-full max-w-[550px] mt-4">
           <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;