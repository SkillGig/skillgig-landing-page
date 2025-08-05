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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 400px;
  margin-left: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const IconBox = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  color: #9ca3af;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  /* Different sizes for visual variety */
  &:nth-child(1) {
    grid-column: span 2;
    min-height: 100px;
  }

  &:nth-child(4) {
    grid-column: span 2;
    min-height: 100px;
  }
`;

const Hero = () => {
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
            {/* Frontend Developer - larger card */}
            <IconBox>
              {/* Frontend Developer icon placeholder */}
              Frontend Developer
            </IconBox>
            <IconBox>
              {/* Code icon placeholder */}
              Code
            </IconBox>
            <IconBox>
              {/* Headphones icon placeholder */}
              Audio
            </IconBox>
            <IconBox>
              {/* Database icon placeholder */}
              Database
            </IconBox>
            <IconBox>
              {/* Monitor icon placeholder */}
              Monitor
            </IconBox>
            <IconBox>
              {/* Analytics icon placeholder */}
              Analytics
            </IconBox>
            <IconBox>
              {/* Security icon placeholder */}
              Security
            </IconBox>
            <IconBox>
              {/* Cloud icon placeholder */}
              Cloud
            </IconBox>
          </IconGrid>
        </div>
      </HeroGrid>
    </HeroContainer>
  );
};

export default Hero;
