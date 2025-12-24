import React from 'react';
import Hero from '../components/Hero';
import BestPicks from '../components/BestPiks';
import FeaturedBooks from "../components/FeaturedBooks";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
   <BestPicks />
   <FeaturedBooks />
    </div>
  );
};

export default Home;