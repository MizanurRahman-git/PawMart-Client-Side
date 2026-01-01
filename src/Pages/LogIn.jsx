import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/UseAuth";
import { Bounce, toast } from "react-toastify";
import Navbar from "../Components/Navbar";

const LogIn = () => {
  const [open, setOpen] = useState(false);
  const { signWithGoogle, setUsers, signWithPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signWithPassword(email, password)
      .then((result) => {
        setUsers(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Log In Successfully", {
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
      .catch((error) => {
        toast.error(error.message, {
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
      });
  };

  const handleGoogleLogIn = () => {
    signWithGoogle()
      .then((result) => {
        setUsers(result.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Log In Successfully", {
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
      .catch((error) => {
        toast.error(error.message, {
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
      });
  };

  return (
    <div>
      <title>Log-In</title>
      <div>
        <header> <Navbar/> </header>
      </div>
      <div className="flex justify-center min-h-screen items-center w-11/12 mx-auto">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="font-medium text-center text-3xl">
              Log In Your Account
            </h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={open ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <span
                    onClick={() => setOpen(!open)}
                    className="absolute right-7 top-[33px] cursor-pointer z-50"
                  >
                    {open ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <button
              onClick={handleGoogleLogIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div>
              <span className="link link-hover">
                Don't have an account? <Link to="/register">Register here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
