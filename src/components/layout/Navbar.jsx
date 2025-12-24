import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Ikon üçün lucide-react istifadə edirik
import CartDrawer from "../CartDrawer"; // Səbət panelini import edirik

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu üçün
  const [isCartOpen, setIsCartOpen] = useState(false); // Səbət paneli üçün

  return (
    <>
      <nav 
        className="relative flex items-center justify-between px-6 md:px-10 py-4 shadow-md font-bona bg-cover bg-center bg-no-repeat z-50"
        style={{ backgroundImage: "url('/navbg.png')" }} 
      >
        {/* Karartma Katmanı */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        {/* LOGO */}
        <Link to="/" className="relative flex items-center gap-3 z-50">
          <img
            src="/booklogo.png"
            alt="BookPoint Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-[20px] md:text-[24px] text-white font-serif">NETH</span>
            <span className="font-extrabold text-[20px] md:text-[24px] text-[#CC9600] font-serif uppercase">Bookpoint</span>
          </div>
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <ul className="hidden lg:flex items-center space-x-8 text-[20px] font-normal text-white font-serif">
          <li><Link to="/" className="hover:text-[#CC9600] transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#CC9600] transition-colors">About</Link></li>
          <li><Link to="/shop" className="hover:text-[#CC9600] transition-colors">Shop</Link></li>
          <li><Link to="/deliveryteam" className="hover:text-[#CC9600] transition-colors">Delivery Team</Link></li>
          <li><Link to="/seller" className="hover:text-[#CC9600] transition-colors">Sellers</Link></li>
        </ul>

        {/* SAĞ TARAF (Səbət, Profil və Hamburger) */}
        <div className="relative flex items-center gap-4 md:gap-6">
          
          {/* Bildiriş Ikonu */}
          <img 
            src="/bell1.png" 
            alt="Bell" 
            className="w-[20px] h-[20px] object-contain cursor-pointer" 
          />

          {/* SƏBƏT İKONU (Yeni əlavə edildi) */}
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="relative text-white hover:text-[#CC9600] transition-colors"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-[#CC9600] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
          
          {/* Profil */}
          <div className="flex flex-col items-center">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#CC9600] p-0.5 object-cover"
            />
            <p className="hidden md:block text-[10px] text-white mt-1">user1@bookpoint.com</p>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <button 
            className="lg:hidden text-white focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBİL AÇILIR MENÜ PANELİ */}
        <div className={`
          fixed inset-0 bg-black/95 transition-transform duration-300 transform lg:hidden flex flex-col items-center justify-center space-y-8 z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <ul className="text-center text-white text-[24px] space-y-6">
            <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/shop">Shop</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/deliveryteam">Delivery Team</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/seller">Sellers</Link></li>
          </ul>
        </div>
      </nav>

      {/* Səbət Drawer Komponenti */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;