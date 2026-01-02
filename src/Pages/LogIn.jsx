import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/UseAuth";
import { Bounce, toast } from "react-toastify";
import Navbar from "../Components/Navbar";

const LogIn = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signWithGoogle, setUsers, signWithPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signWithPassword(email, password)
      .then((result) => {
        setUsers(result.user);
        navigate(location.state ? location.state : "/");
        toast.success("Log In Successfully", {
          position: "top-center",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogIn = () => {
    signWithGoogle()
      .then((result) => {
        setUsers(result.user);
        navigate(location.state ? location.state : "/");
        toast.success("Log In Successfully", {
          position: "top-center",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          transition: Bounce,
        });
      });
  };

  const handleDemoLogin = () => {
    setEmail("mdmizanurrahmanhridoy5@gmail.com");
    setPassword("Hridoy32");
  };

  return (
    <div>
      <title>Log-In</title>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-sm rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-semibold text-center mb-10 tracking-wide">
            <span className="text-yellow-400">s</span>
            <span className="text-red-400">i</span>
            <span className="text-green-400">g</span>
            <span className="text-blue-400">n</span>{" "}
            <span className="text-purple-400">i</span>
            <span className="text-pink-400">n</span>
            <span className="text-gray-400">.</span>
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-gray-400 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-gray-700"
              />
            </div>

            <div className="relative">
              <label className="text-gray-400 text-sm">Password</label>
              <input
                type={open ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 text-gray-700"
              />

              <span
                onClick={() => setOpen(!open)}
                className="absolute right-2 top-9 cursor-pointer text-gray-500"
              >
                {open ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-gray-400 hover:text-blue-500 cursor-pointer">
                Forgotten password?
              </span>

              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition cursor-pointer">
                Sign in
              </button>
            </div>
          </form>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full mt-4 border border-dashed border-blue-400 text-blue-500 py-2 rounded-full text-sm hover:bg-blue-50 transition"
          >
            Use Demo Account
          </button>

          <div className="my-8 text-center text-gray-300 text-sm">OR</div>

          <button
            onClick={handleGoogleLogIn}
            className="w-full flex items-center justify-center gap-3 border rounded-full py-2 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Sign in with Google
            </span>
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-500 font-medium ml-1 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
