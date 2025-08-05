import React from "react";
import '../../styles/Hero.css';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="flex flex-col items-start gap-5 mainWidth">
          <h1
            className="text-white font-normal text-[64px] leading-none tracking-[-0.394px] header"
          >
            Unleash your full potential
          </h1>
          <p
            className="text-white font-normal text-[24px] leading-none tracking-[-0.394px]"
            style={{ fontFamily: "Inter" }}
          >
            Your path to mastery is driven by discipline, top-notch lectures,
            personalised mentorship, and a community that pushes you forward.
          </p>
        </div>

        {/* Icon Section */}
        <div>
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
