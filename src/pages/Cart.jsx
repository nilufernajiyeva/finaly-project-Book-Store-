import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 900;
  const totalPrice = 700; // Şəkildəki endirimli qiymət kimi sabit qoyulub

  return (
    <div className="flex flex-col md:flex-row min-h-[600px] bg-white font-serif">
      
      {/* --- SOL TƏRƏF: Reklam Paneli --- */}
      <aside className="w-full md:w-72 bg-[#0d1b3e] text-white p-8 flex flex-col items-center justify-between relative overflow-hidden">
        <div className="z-10 text-center">
          <h2 className="text-2xl font-bold italic leading-tight mb-4">
            Enjoy Special Discounts with <br />
            <span className="text-white">Mastercard & Visa!</span>
          </h2>
          
          <div className="my-8 flex justify-center">
            {/* Kart aparatı təsviri üçün sadə ikon */}
            <div className="bg-gray-300 w-24 h-32 rounded-lg relative">
                <div className="bg-gray-800 w-16 h-2 mx-auto mt-4 rounded"></div>
                <div className="bg-amber-500 w-10 h-6 absolute -bottom-2 right-2 rounded shadow-lg"></div>
            </div>
          </div>

          <div className="space-y-1 text-sm mt-10">
            <p className="font-semibold">Available at:</p>
            <p>KCC Book Fair</p>
            <p>BMICH Book Fair</p>
          </div>
        </div>
        
        {/* Alt hissədəki uşaq və kitab illüstrasiyası (təmsili) */}
        <div className="mt-10 relative z-10">
           <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-4xl">
             📖
           </div>
        </div>
      </aside>

      {/* --- SAĞ TƏRƏF: Səbət Detalları --- */}
      <main className="flex-1 flex flex-col items-center py-12 px-4">
        <h1 className="text-3xl font-bold text-[#8b5e3c] mb-12">Your Cart Details</h1>

        {/* Məhsul Kartı */}
        <div className="w-full max-w-sm border border-gray-200 rounded-2xl p-8 shadow-sm bg-white relative">
          <div className="aspect-[3/4] w-48 mx-auto mb-6 shadow-xl overflow-hidden rounded-sm border-4 border-[#8b5e3c]/20">
            {/* Kitab Şəkli Yerləşəcək */}
            <img 
              src="https://via.placeholder.com/200x300" 
              alt="Manikkawatha" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800">Manikkawatha</h3>
            <p className="text-sm text-gray-600 mb-4">Mahinda Prasad Masimbula</p>
            <p className="text-lg font-bold text-gray-900 mb-6">Rs. {pricePerUnit}/=</p>

            <div className="flex items-center justify-center gap-4">
              <label className="text-sm font-bold text-[#8b5e3c]">Copies</label>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-14 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        {/* Yekun Qiymət və Düymə */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Total Price: <span className="text-[#8b5e3c]">Rs. {totalPrice}.00</span>
          </h2>
          
          <button className="px-12 py-3 border-2 border-gray-400 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;