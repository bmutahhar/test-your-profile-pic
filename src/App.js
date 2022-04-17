import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import UploadImg from "./components/UploadImg";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <>
      <Navbar />
      <Banner />
      <UploadImg />

      <div className="combine_section mt-5 pt-5">
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
