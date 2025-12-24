import React from "react";
import { useCart } from "../context/CartContext";

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="relative aspect-[3/4] bg-[#F9F9F9] flex items-center justify-center p-4 overflow-hidden">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="h-[85%] w-[80%] object-contain shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            addToCart(book);
          }}
          className="absolute top-2 right-2 bg-[#D4A017] p-2 shadow-md hover:bg-black transition-colors z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M96,216a12,12,0,1,1-12-12A12,12,0,0,1,96,216Zm88-12a12,12,0,1,0,12,12A12,12,0,0,0,184,204Zm48-132H69L64.16,42.23A12,12,0,0,0,52.4,32H24a12,12,0,0,0,0,24H42.82L76.53,172.68A12,12,0,0,0,88.29,184H192a12,12,0,0,0,11.39-8.15l32-96A12,12,0,0,0,232,72Z"></path>
          </svg>
        </div>
      </div>
      <div className="mt-4 text-center sm:text-left">
        <h3 className="font-serif font-bold text-[18px] text-black leading-tight">
          {book.title}
        </h3>
        <p className="font-serif font-normal text-[15px] text-gray-500 mt-1">
          {book.author}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
