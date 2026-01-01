import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import useAuth from "../Hooks/UseAuth";
import { Bounce, toast } from "react-toastify";
import { IoMdHome } from "react-icons/io";
import { MdPets } from "react-icons/md";

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
        About
      </NavLink>
      {users && (
        <>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md"
            to="/addListing"
          >
            Add Listing
          </NavLink>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md"
            to="/myListings"
          >
            My Listings
          </NavLink>
          <NavLink
            className=" p-1 text-lg font-semibold rounded-md"
            to="/myOrders"
          >
            My Orders
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
              <li>
                <p>Theme</p>
              </li>
              <label className="toggle text-base-content">
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                />
                <svg
                  aria-label="enabled"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="4"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </g>
                </svg>
                <svg
                  aria-label="disabled"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </label>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              className="px-1 sm:px-0 sm:p-1 sm:text-lg font-semibold rounded-md"
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
      </div>
    </div>
  );
};

export default Navbar;
