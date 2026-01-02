import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/UseAuth";
import { Bounce, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Register = () => {
  const [open, setOpen] = useState(false);
  const { signWithGoogle, setUsers, createUser, updateData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value;
    const email = form.email?.value;
    const photo = form.photo?.value;
    const password = form.password?.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "😭 Minimum Six characters, at least one uppercase, one lowercase letter and one number",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );

      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateData({ displayName: name, photoURL: photo })
          .then(() => {
            setUsers({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Registration Successfully", {
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
            e.target.reset();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message, {
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
      <title>Registration</title>
      <div>
        <header>
          {" "}
          <Navbar />{" "}
        </header>
      </div>
      <div className="flex justify-center min-h-screen items-center w-11/12 mx-auto">
        <div className="w-full max-w-sm rounded-2xl shadow-xl px-8 py-10">
          {/* Title */}
          <h1 className="text-center text-3xl font-semibold mb-8">
            <span className="text-yellow-400">s</span>
            <span className="text-pink-400">i</span>
            <span className="text-green-400">g</span>
            <span className="text-blue-400">n</span>{" "}
            <span className="text-purple-400">u</span>
            <span className="text-red-400">p</span>
            <span className="text-gray-400">.</span>
          </h1>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={open ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border-b border-gray-300 py-2 pr-10 focus:outline-none focus:border-blue-500"
              />
              <span
                onClick={() => setOpen(!open)}
                className="absolute right-2 top-3 cursor-pointer text-gray-500"
              >
                {open ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Photo URL */}
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />

            {/* Register Button */}
            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-full transition">
              Sign up
            </button>
          </form>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogIn}
            className="w-full mt-5 flex items-center justify-center gap-3 border rounded-full py-3 hover:bg-gray-50"
          >
            <svg width="18" height="18" viewBox="0 0 512 512">
              <path
                fill="#EA4335"
                d="M256 113c35 0 66 12 91 36l62-62C371 46 316 24 256 24 161 24 81 80 44 163l72 56c17-52 65-106 140-106z"
              />
              <path
                fill="#4285F4"
                d="M512 256c0-18-2-36-6-52H256v99h143c-6 32-24 59-50 77l77 60c45-41 86-102 86-184z"
              />
              <path
                fill="#FBBC05"
                d="M44 349c-10-30-10-63 0-93l-72-56C-14 256-14 312 28 368l72-19z"
              />
              <path
                fill="#34A853"
                d="M256 488c60 0 110-20 147-54l-77-60c-21 14-48 23-70 23-75 0-123-54-140-106l-72 56c37 83 117 141 212 141z"
              />
            </svg>
            Sign up with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
