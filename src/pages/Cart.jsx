import React, { useState } from 'react';
import { useCart } from "../context/CartContext"; 
import CheckoutModal from '../components/CheckoutModal';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentItem = cartItems.length > 0 ? cartItems[cartItems.length - 1] : null;

 
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  // Şəkil yüklənməyəndə sonsuz döngəni kəsən funksiya
  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = "https://placehold.co/400x600?text=Book+Cover";
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-white font-bona">
      
      {/* --- SOL TƏRƏF: Reklam Paneli --- */}
      <aside className="w-full md:w-[350px] bg-[#0d1b3e] text-white p-10 flex flex-col items-center justify-between">
        <div className="text-center">
          <h2 className="text-2xl font-bold leading-tight mb-8">
            Enjoy Special Discounts with <br /> 
            <span className="italic">Mastercard & Visa!</span>
          </h2>
          <div className="w-full h-48 bg-white/5 rounded-2xl mb-10 flex items-center justify-center border border-dashed border-white/20 p-4">
             {/* Reklam şəkli (Public qovluğunda olmalıdır) */}
             <img src="/card-promo.png" alt="Promo" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="text-left space-y-2 opacity-80 text-sm">
            <p className="font-bold uppercase tracking-wider text-[#CC9600]">Available at:</p>
            <p>KCC Book Fair</p>
            <p>BMICH Book Fair</p>
          </div>
        </div>
        <div className="mt-10">
           <img src="/child-reading.png" alt="Illustration" className="w-32 opacity-80" />
        </div>
      </aside>

      {/* --- SAĞ TƏRƏF: Səbət Detalları --- */}
      <div className="flex-1 flex flex-col items-center py-16 px-6">
        <h1 className="text-[32px] md:text-[40px] font-bold text-[#CC9600] mb-16 tracking-widest uppercase text-center">
          Your Cart Details
        </h1>

        {currentItem ? (
          <div className="w-full max-w-md">
            {/* Məhsul Kartı */}
            <div className="w-full border border-gray-100 rounded-[40px] p-10 shadow-2xl bg-white flex flex-col items-center relative">
              
              {/* Səbətdən silmək üçün X düyməsi */}
              <button 
                onClick={() => removeFromCart(currentItem._id)}
                className="absolute top-6 right-8 text-gray-400 hover:text-red-500 transition-colors text-xl"
              >
                ✕
              </button>

              {/* DİNAMİK ŞƏKİL: imageUrl istifadə edildi */}
              <div className="w-56 h-72 bg-gray-50 rounded-lg shadow-xl mb-8 overflow-hidden border-2 border-gray-100 flex items-center justify-center">
                <img 
                  src={currentItem.imageUrl} 
                  alt={currentItem.title} 
                  className="w-full h-full object-cover"
                  onError={handleImageError} 
                />
              </div>

              <div className="text-center w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">{currentItem.title}</h3>
                <p className="text-gray-500 mb-6 font-medium tracking-wide">
                  {currentItem.author}
                </p>
                <p className="text-3xl font-black text-black mb-8 italic">
                  Rs. {currentItem.price}/=
                </p>

                {/* Sayı idarəetmə hissəsi */}
                <div className="flex items-center justify-center gap-6 border-t border-gray-100 pt-8">
                  <label className="text-xl font-bold text-[#CC9600] uppercase tracking-tighter">Copies</label>
                  <div className="flex items-center gap-4">
                    <button 
                      type="button"
                      onClick={() => updateQuantity(currentItem._id, -1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-xl font-bold"
                    > - </button>
                    
                    <span className="text-2xl font-bold min-w-[30px] text-center">
                      {currentItem.quantity || 1}
                    </span>

                    <button 
                      type="button"
                      onClick={() => updateQuantity(currentItem._id, 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-xl font-bold"
                    > + </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-center font-bona">
              <h2 className="text-3xl font-bold text-black mb-10">
                Total Price: <span className="text-[#CC9600] ml-2 font-black italic">Rs. {totalPrice}.00</span>
              </h2>
              
              <button 
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-16 py-5 border-2 border-gray-300 rounded-2xl text-xl font-bold text-gray-700 hover:border-[#CC9600] hover:text-[#CC9600] hover:bg-[#CC9600]/5 transition-all duration-300 uppercase tracking-widest"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-20">
            <p className="text-2xl text-gray-400 italic mb-8 font-bona">Your cart is empty.</p>
          </div>
        )}
      </div>
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Cart;