import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import useAuth from "../Hooks/UseAuth";
import { Bounce, toast } from "react-toastify";
import { IoMdHome } from "react-icons/io";
import {
  MdPets,
  MdPlaylistAddCheckCircle,
  MdPlaylistAddCircle,
} from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { PiBookOpenTextFill } from "react-icons/pi";
const Navbar = () => {
  const { users, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log Out Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <NavLink
        className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
        to="/"
      >
        <IoMdHome />
        Home
      </NavLink>
      <NavLink
        className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
        to="/petsSupplies"
      >
        <MdPets />
        Pets & Supplies
      </NavLink>
      <NavLink
        className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
        to="/about"
      >
        <PiBookOpenTextFill /> About
      </NavLink>
      {users && (
        <>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
            to="/addListing"
          >
            <MdPlaylistAddCircle /> Add Listing
          </NavLink>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
            to="/myListings"
          >
            <MdPlaylistAddCheckCircle /> My Listings
          </NavLink>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md flex items-center gap-0.5"
            to="/myOrders"
          >
            <FaCartShopping /> My Orders
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar px-3 md:px-10 lg:px-20 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 gap-2 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center  font-medium cursor-pointer text-xl"
        >
          <img className="w-20 rounded-full" src={logo} alt="" />
          <span className="hidden sm:block"> PawMart</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        {users ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <img
                className="w-14 rounded-full border"
                src={users.photoURL}
                alt="image"
              />
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-200 rounded-box z-10 mt-4 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>
              <li>
                <p>{users.displayName}</p>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              className="px-1 sm:px-0.5 sm:p-1 sm:text-lg font-semibold rounded-md"
              to="/logIn"
            >
              Log In
            </NavLink>
            <NavLink
              className=" sm:p-1 sm:text-lg font-semibold rounded-md"
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={(e) => handleTheme(e.target.checked)}
          />

          <div
            className="w-10 h-5 bg-gray-300 rounded-full
               peer-checked:bg-blue-600 dark:bg-gray-700
               transition-colors duration-300"
          ></div>

          <div
            className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full
               flex items-center justify-center
               transform transition-transform duration-300
               peer-checked:translate-x-5"
          >
            <svg
              className="w-2.5 h-2.5 text-yellow-500 peer-checked:hidden"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
            </svg>

            <svg
              className="w-2.5 h-2.5 text-gray-800 hidden peer-checked:block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
