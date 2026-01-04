import React from "react";
import logo from '../assets/Logo.png'
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <div>
            <img className="w-60" src={logo} alt="" />
        </div>
        <p className="font-semibold">PawMart connects local pet owners and buyers for adoption and pet
care products.</p>
        <p className="font-bold">
          Providing reliable tech since 2000
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to='/'>Home</Link>   
          <Link to='/about'>About</Link>   
          <Link to='/petsSupplies'>Get Started</Link>   
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
