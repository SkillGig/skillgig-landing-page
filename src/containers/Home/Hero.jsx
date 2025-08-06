import React from "react";
import styled from "styled-components";
import "../../styles/Hero.css";

// Styled Components
const HeroContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 4rem;
  max-width: 1200px;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

const HeroTitle = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 64px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroDescription = styled.p`
  color: #e5e7eb;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  font-family: "Inter", sans-serif;
  margin: 0;
  max-width: 480px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 16px;
  grid-auto-flow: row dense;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(120px, 1fr));
    gap: 16px;
    padding-top: 8px;
  }
`;

const IconBox = styled.div`
  background: rgba(163, 163, 163, 0.08);
  backdrop-filter: blur(10px);
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: none;
  border-radius: 16px;
  border: none;
  transition:
    box-shadow 0.3s,
    background 0.3s,
    width 0.3s,
    padding 0.3s,
    flex-direction 0.3s;
  z-index: 1;

  .icon-svg {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: block;
    margin: 0 auto;
    transition: margin-right 0.3s;
  }

  .icon-label {
    opacity: 0;
    margin-top: 12px;
    margin-left: 0;
    white-space: nowrap;
    transition: opacity 0.3s, margin-top 0.3s, margin-left 0.3s, text-align 0.3s;
    font-size: 20px;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    display: block;
    text-align: center;
  }

  &:hover {
    background: rgba(163,163,163,0.14);
    box-shadow: 0 0 32px 0 rgba(163,163,163,0.25), 0 0 0 2px #b6b6c9;
    border: 1.5px solid #b6b6c9;
    width: fit-content;
    min-width: 120px;
    padding-left: 32px;
    padding-right: 32px;
    z-index: 10;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &:hover .icon-label {
    opacity: 1;
    margin-top: 0;
    margin-left: 16px;
    text-align: left;
    position: static;
    left: auto;
    top: auto;
    transform: none;
  }

  &:hover .icon-svg {
    margin-right: 0;
  }

  /* Remove grid-column span for 4-column layout */
`;

const Hero = () => {
  // Dummy SVG icons
  // Muted color for icons
  const iconColor = "#A3A3A3";
  const icons = [
    {
      label: "Frontend Developer",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="16" rx="3" fill={iconColor} />
          <rect x="10" y="12" width="12" height="8" rx="2" fill={iconColor} />
          <path d="M13 18L16 15L19 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Code",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <path d="M12 24L20 8" stroke={iconColor} strokeWidth="2" />
          <path d="M8 16L12 24" stroke={iconColor} strokeWidth="2" />
          <path d="M24 16L20 8" stroke={iconColor} strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "Audio",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="10" stroke={iconColor} strokeWidth="2" />
          <rect x="14" y="10" width="4" height="12" rx="2" fill={iconColor} />
        </svg>
      ),
    },
    {
      label: "Database",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="10" rx="8" ry="4" fill={iconColor} />
          <rect x="8" y="10" width="16" height="12" rx="4" fill={iconColor} />
        </svg>
      ),
    },
    {
      label: "Monitor",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="8" width="20" height="12" rx="2" fill={iconColor} />
          <rect x="12" y="22" width="8" height="2" rx="1" fill={iconColor} />
        </svg>
      ),
    },
    {
      label: "Analytics",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <rect x="8" y="16" width="4" height="8" rx="2" fill={iconColor} />
          <rect x="14" y="12" width="4" height="12" rx="2" fill={iconColor} />
          <rect x="20" y="8" width="4" height="16" rx="2" fill={iconColor} />
        </svg>
      ),
    },
    {
      label: "Security",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <rect x="10" y="14" width="12" height="8" rx="4" fill={iconColor} />
          <path d="M16 10v4" stroke={iconColor} strokeWidth="2" />
        </svg>
      ),
    },
    {
      label: "Cloud",
      svg: (
        <svg className="icon-svg" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="18" rx="8" ry="6" fill={iconColor} />
          <ellipse cx="16" cy="14" rx="6" ry="4" fill={iconColor} />
        </svg>
      ),
    },
  ];

  return (
    <HeroContainer>
      <HeroGrid>
        {/* Text Section */}
        <TextSection>
          <HeroTitle>
            BRING OUT YOUR
            <br />
            BEST POTENTIAL
          </HeroTitle>
          <HeroDescription>
            Learn from the best mentors from all around the world, Save notes &
            Prep for interviews with best interviewers from the industry
          </HeroDescription>
        </TextSection>

        {/* Icon Section */}
        <div>
          <IconGrid>
            {icons.map((icon, idx) => (
              <IconBox key={icon.label}>
                {icon.svg}
                <span className="icon-label">{icon.label}</span>
              </IconBox>
            ))}
          </IconGrid>
        </div>
      </HeroGrid>
    </HeroContainer>
  );
};

export default Hero;