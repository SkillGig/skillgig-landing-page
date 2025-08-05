import React from "react";
import SkillLogo from "../../assets/Skill.svg";
import GigLogo from "../../assets/Gig.svg";
import VectorLogo from "../../assets/Vector.svg";
import '../../styles/NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="flex w-[960px] h-[72px] p-4 px-8 flex-col items-start gap-[10px] shrink-0 rounded-[24px] bg-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
        <div className="flex w-full items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex flex-col items-start">
            <div className="flex items-start">
              <img
                src={SkillLogo}
                alt="Skill"
                className="w-[57.156px] h-[21.141px] shrink-0"
              />
              <img
                src={GigLogo}
                alt="Gig"
                className="w-[38.699px] h-[27.483px] shrink-0"
              />
            </div>
            <img
              src={VectorLogo}
              alt="Vector"
              className="w-[79.181px] h-[5.559px] shrink-0"
            />
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <a
                href="#"
                className="text-white font-inter fontWeight600 text-[16px] leading-normal hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white font-inter text-[16px] fontWeight leading-normal hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Our Products
              </a>
              <a
                href="#"
                className="text-white font-inter text-[16px] fontWeight leading-normal hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;