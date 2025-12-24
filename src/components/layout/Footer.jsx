import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-[#CC9600] py-8 px-6 md:px-10 border-t border-[#CC9600]/20 w-full font-bona">
      {/* Əsas konteyner: Mobildə alt-alta (flex-col), Böyük ekranda yan-yana (md:flex-row) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-4 text-center md:text-left">
        
        {/* Sol tərəf: Copyright və Mətn */}
        <div className="flex flex-col md:flex-row items-center gap-4 flex-1 min-w-0">
          
          {/* Copyright - Mobildə border-r silinir, border-b əlavə olunur (istəyə bağlı) */}
          <div className="whitespace-nowrap text-[14px] md:text-[12px] text-white md:border-r border-white/30 pr-0 md:pr-4 pb-2 md:pb-0 shrink-0">
            © 2024 | Neth BookPoint
          </div>

          {/* Mətn - Mobildə mərkəzlənir */}
          <p className="font-poppins text-[13px] leading-relaxed italic opacity-90 max-w-[500px] md:max-w-none">
            Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and register for our online platform to enjoy maximum benefits!
          </p>
        </div>

        {/* Sağ tərəf: İkonlar */}
        <div className="flex items-center gap-6 shrink-0 pt-2 md:pt-0">
          <a href="#" className="hover:scale-110 transition-all duration-200" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36 4H30C27.3478 4 24.8043 5.05357 22.9289 6.92893C21.0536 8.8043 20 11.3478 20 14V20H14V28H20V44H28V28H34L36 20H28V14C28 13.4696 28.2107 12.9609 28.5858 12.5858C28.9609 12.2107 29.4696 12 30 12H36V4Z" 
              stroke="#CC9600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#" className="hover:scale-110 transition-all duration-200" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 16C35.1826 16 38.2348 17.2643 40.4853 19.5147C42.7357 21.7652 44 24.8174 44 28V42H36V28C36 26.9391 35.5786 25.9217 34.8284 25.1716C34.0783 24.4214 33.0609 24 32 24C30.9391 24 29.9217 24.4214 29.1716 25.1716C28.4214 25.9217 28 26.9391 28 28V42H20V28C20 24.8174 21.2643 21.7652 23.5147 19.5147C25.7652 17.2643 28.8174 16 32 16Z" 
              stroke="#CC9600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18H4V42H12V18Z" stroke="#CC9600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" 
              stroke="#CC9600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;