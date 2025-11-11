import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center space-y-3">
      <title>Error-Page</title>
      <h1>
        <span className="font-bold text-[250px] bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          404
        </span>
      </h1>
      <p className="font-medium ">OPPS! PASE NOT FOUND</p>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to='/'>
        <button
          class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
          type="button"
        >
          <div class="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-[184px] z-10 duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="25px"
              width="25px"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#000000"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <p class="translate-x-2">Go Back</p>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
