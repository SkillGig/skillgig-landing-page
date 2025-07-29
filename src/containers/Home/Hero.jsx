import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">
            BRING OUT YOUR <br /> BEST POTENTIAL
          </h1>
          <p className="text-lg">
            Learn from the best mentors from all around the world, Save notes &
            Prep for interviews with best interviewers from the industry
          </p>
        </div>
        <div>
          {/* Placeholder for the grid of icons */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
            <div className="bg-gray-700 p-6 rounded-lg text-center">Icon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
