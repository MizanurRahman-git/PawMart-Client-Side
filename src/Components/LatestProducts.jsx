import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router";


const LatestProducts = ({ product }) => {
  const {_id, productName, productImage, price, location, category } = product;
  return (
    <div className="card border-2 border-blue-800 bg-base-100 h-fit shadow-sm">
      <figure className="p-1.5">
        <img
          src={productImage}
          alt=""
          className="rounded-xl w-100 h-50 object-cover"
        />
      </figure>
      <div className="">
        <div className="p-3">
          <p className="font-medium text-gray-500">{category}</p>
          <h2 className="text-2xl font-medium">{productName}</h2>
        </div>
        <div className="flex justify-between p-3">
          <p className="flex items-center gap-0.5"> <span> <RiUserLocationFill /></span>{location}</p>
          <p className="flex  font-semibold text-xl"> {price}<span><HiOutlineCurrencyBangladeshi /></span></p>
        </div>
        <div className="card-actions">
          <Link to={`/productsDetails/${_id}`} className="bg-blue-800 text-white px-4 py-2 w-full flex items-center justify-between text-xl">
            <span>See Details</span>{" "}
            <span>
              {" "}
              <FaArrowRightLong />{" "}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
