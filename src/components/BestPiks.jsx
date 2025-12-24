import React, { useState } from 'react';
import BookCard from '../common/BookCard';

const BestPicks = () => {
  const [activeTab, setActiveTab] = useState(1);

  const books = [
    { _id: "1", title: "Thunmanhandiya", author: "Mahagamasekara", imageUrl: "/Thunmanhandiya.png" },
    { _id: "2", title: "Gamperaliya", author: "Martin Wickramasinghe", imageUrl: "/Gamperaliya.png" },
    { _id: "3", title: "Nectar in a Sieve", author: "Kamala Markandaya", imageUrl: "/Sieve.png" },
    { _id: "4", title: "Adaraneeya Victoria", author: "Mohan Raj Madawala", imageUrl: "/victoria.png" },
  ];
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">     
      <div className="max-w-[1300px] w-full px-6 flex flex-col items-center">
        <h2 className="font-serif font-bold text-[42px] text-black mb-16 ">
          Our Best Picks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-3 mt-20">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`w-3 h-3 rounded-full border transition-all ${
                activeTab === i 
                ? "bg-blue-500 border-blue-500" 
                : "bg-white border-blue-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default BestPicks;