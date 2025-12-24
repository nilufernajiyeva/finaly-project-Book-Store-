import React from "react";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartDrawer() {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  const handleGoToCart = () => {
    setIsCartOpen(false);
    navigate("/cart");
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-[#0a0a0a] border-l border-[#CC9600]/30 z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[#4a3500] p-6 flex justify-between items-center">
          <h2 className="text-white text-2xl font-serif font-bold tracking-wide">
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100vh-250px)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-400 text-center mt-10 italic">
              Səbətiniz boşdur.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl p-5 mb-4 flex flex-col items-center group relative"
              >
                <div className="w-32 h-44 mb-4 overflow-hidden rounded shadow-lg border border-gray-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center w-full">
                  <h3 className="text-black font-bold text-lg font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 italic mb-4">
                    {item.author}
                  </p>
                  <div className="flex justify-between items-center w-full mt-2">
                    <span className="text-xl font-bold text-gray-900">
                      Rs. 900/=
                    </span>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:scale-110 transition-transform p-2 bg-red-50 rounded-full"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-6 bg-[#0a0a0a] border-t border-[#CC9600]/20">
            <div className="flex justify-between text-white mb-6 font-serif text-lg">
              <span>Total:</span>
              <span className="text-[#CC9600] font-bold">
                Rs. {cartItems.length * 900}.00
              </span>
            </div>
            <button
              onClick={handleGoToCart}
              className="w-full py-3 bg-[#CC9600] text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
