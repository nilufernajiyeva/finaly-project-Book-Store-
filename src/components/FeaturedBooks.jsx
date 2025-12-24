import React from "react";
import Button from "../common/ExploreMore";

const FeaturedBooks = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* LEFT IMAGE */}
        <div className="flex-1 relative">
          <p className="absolute top-4 left-4 text-yellow-400 font-semibold tracking-widest text-sm">
            FIND MAGIC WITHIN THE PAGES
          </p>

         <img
  src="/bookshelf.png"
  alt="Featured"
  className="w-full max-w-md object-contain"
/>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl font-bold leading-tight">
            Your favourite <span className="text-yellow-400">Reads</span>
            <br /> Are Here!
          </h2>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Buy your favorite books online with ease! Enjoy exclusive offers
            and discounts on selected titles. Dive into our collection and
            find special deals that make reading more affordable.
          </p>

          {/* STATS */}
          <div className="flex gap-14 mt-4">
            <div>
              <p className="text-yellow-400 text-2xl font-bold">800+</p>
              <p className="text-gray-500 text-sm">Book Listing</p>
            </div>
            <div>
              <p className="text-yellow-400 text-2xl font-bold">1K+</p>
              <p className="text-gray-500 text-sm">Registered Members</p>
            </div>
            <div>
              <p className="text-yellow-400 text-2xl font-bold">50+</p>
              <p className="text-gray-500 text-sm">Branch Count</p>
            </div>
          </div>

          <Button>Explore More</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
