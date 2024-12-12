import React from "react";
import Hero from "../../sections/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className="w-full bg-primary-green font-[Poppins]">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default Home;
