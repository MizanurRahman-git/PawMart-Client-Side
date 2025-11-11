import React from "react";
import logo from '../assets/Logo.png'
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <div className="flex items-center gap-5">
            <img className="w-18 rounded-full" src={logo} alt="" />
            <h1 className="font-semibold text-xl">PawMart Industries Ltd.</h1>
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
          <Link to=''>Contact</Link>   
          <Link to=''>Terms</Link>   
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
