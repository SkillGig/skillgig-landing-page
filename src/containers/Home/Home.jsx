import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";

// Styled Components
const HomeContainer = styled.div`
  background: #0d0217;
  background: linear-gradient(135deg, #0d0217 0%, #090215 50%, #0d0217 100%);
  min-height: 100vh;
  position: relative;
`;

const SectionsContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <SectionsContainer>
        <Hero />
        {/* Other sections will go here */}
      </SectionsContainer>
    </HomeContainer>
  );
};

export default Home;
