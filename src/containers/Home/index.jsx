import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-[#1a0f2d] min-h-screen">
      <Navbar />
      <Hero />
      {/* Other sections will go here */}
    </div>
  );
};

export default Home;
