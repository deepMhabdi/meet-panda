import React from "react";
import Navbar from "./components/Navbar.jsx"
import LandingPage from "./components/LandingPage.jsx"
import Benefits from "./components/Benefits.jsx"
import OneStepAway from "./components/OneStepAway.jsx";
import AITeammate from "./components/AITeammate.jsx";
import Professionals from "./components/Professionals.jsx";
import Testimonials from "./components/TestimonialSection.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Benefits />
      <OneStepAway />
      <AITeammate />
      <Professionals />
      <Testimonials />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default App;
