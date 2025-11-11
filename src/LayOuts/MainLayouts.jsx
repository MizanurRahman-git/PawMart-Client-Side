import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";

const MainLayouts = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <section className="mt-10">
            <Slider />
          </section>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
