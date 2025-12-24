import React from "react";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();

  // "Proceed to Checkout" veya "View Details" butonuna basınca ana sepet sayfasına gider
  const handleGoToCart = () => {
    onClose(); // Drawer'ı kapat
    navigate("/cart"); // Cart.jsx sayfasına yönlendir
  };

  return (
    <>
      {/* Karartma Katmanı (Overlay) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sepet Paneli (Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-[#0a0a0a] border-l border-[#CC9600]/30 z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header - Kahverengi/Altın Başlık Alanı */}
        <div className="bg-[#4a3500] p-6 flex justify-between items-center">
          <h2 className="text-white text-2xl font-serif font-bold tracking-wide">
            Your Cart
          </h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sepet İçeriği */}
        <div className="p-6 overflow-y-auto h-[calc(100vh-250px)]">
          {/* Örnek Kitap Kartı */}
          <div className="bg-white rounded-xl p-5 shadow-inner flex flex-col items-center group relative">
            <div className="w-32 h-44 mb-4 overflow-hidden rounded shadow-lg border border-gray-100">
              <img
                src="https://via.placeholder.com/150x200"
                alt="Book Cover"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-black font-bold text-lg font-serif">Manikkawatha</h3>
              <p className="text-xs text-gray-500 italic mb-4 font-medium">
                Mahinda Prasad Masimbula
              </p>

              <div className="flex justify-between items-center w-full gap-10 mt-2">
                <span className="text-xl font-bold text-gray-900">Rs. 900/=</span>
                <button className="text-red-500 hover:scale-110 transition-transform p-2 bg-red-50 rounded-full">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Eğer sepet boşsa görünecek mesaj (Opsiyonel) */}
          {/* <p className="text-gray-400 text-center mt-10">Your cart is empty.</p> */}
        </div>

        {/* Alt Kısım - Butonlar */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-[#0a0a0a] border-t border-[#CC9600]/20">
          <div className="flex justify-between text-white mb-6 font-serif text-lg">
            <span>Total:</span>
            <span className="text-[#CC9600] font-bold">Rs. 900.00</span>
          </div>

          <button
            onClick={handleGoToCart}
            className="w-full py-3 bg-transparent border-2 border-[#CC9600] text-[#CC9600] rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#CC9600] hover:text-black transition-all duration-300"
          >
            View Wish List Details
          </button>
          
          <button
            onClick={handleGoToCart}
            className="w-full mt-3 py-3 bg-[#CC9600] text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;