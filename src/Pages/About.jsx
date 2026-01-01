import React from "react";
import { FiHeart, FiUsers, FiCheckCircle } from "react-icons/fi";
import Navbar from "../Components/Navbar";
import AboutPage from "../Components/AboutPage";
import Footer from "../Components/Footer";


const About = () => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
      <section className="bg-base-100 py-16 px-6 md:px-14 w-11/12 mx-auto">
        <AboutPage/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default About;
