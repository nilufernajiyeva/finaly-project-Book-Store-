import React from 'react';

const CheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 font-bona">
     
      <div className="relative w-full max-w-3xl bg-[#0a0a0a] rounded-[40px] p-8 md:p-14 shadow-2xl border border-gray-800/50">
        
        <h2 className="text-center text-[#CC9600] text-3xl font-bold mb-10 tracking-widest uppercase">
          Checkout Details
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          
         
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/person.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Receiver name" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/Home.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Billing Address" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/Home.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Sending Address" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/location_on.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Select Province" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/Phone.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Contact Number" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="relative">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img src="/Credit-card.png" alt="" className="w-full h-full object-contain" />
             </div>
             <input type="text" placeholder="Card Number" className="w-full bg-[#D9D9D9] rounded-xl p-4 pl-12 text-black placeholder:text-gray-600 outline-none" />
          </div>

          
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <button type="submit" className="bg-[#CC9600] text-black font-extrabold py-4 rounded-xl hover:scale-105 transition-transform text-xl">
              Pay Now
            </button>
            
            <button 
              type="button" 
              onClick={onClose}
              className="border-2 border-[#CC9600] text-[#CC9600] font-extrabold py-4 rounded-xl hover:bg-[#CC9600]/10 transition-colors text-xl"
            >
              Close Checkout Page
            </button>
          </div>
        </form>

        <p className="text-[#FF0000] text-center text-sm mt-8 font-medium italic">
          *Contact us to cancel your order
        </p>
      </div>
    </div>
  );
};

export default CheckoutModal;