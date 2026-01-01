import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="w-11/12 mx-auto">
          <section className="mt-10">
            <Slider />
          </section>
          <Outlet />
        </main>
      </div>
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
