import { useNavigate, useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdDescription } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { RiLuggageCartFill } from "react-icons/ri";

const ProductDetails = () => {
  const { id } = useParams();
  const { users } = useAuth();
  const [product, setProduct] = useState({});
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pawmart-store-server.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const {
    productName,
    productImage,
    price,
    location,
    description,
    date,
    category,
    buyerEmail,
    _id,
  } = product;

  const handleModal = () => {
    modalRef.current.showModal();
  };

  const handleOrder = (e) => {
    e.preventDefault();

    const orderInfo = {
      buyerName: e.target.name?.value,
      buyerEmail: e.target.email?.value,
      _id: e.target.id?.value,
      productName: e.target.productName?.value,
      quantity: e.target.quantity?.value,
      price: e.target.price?.value,
      address: e.target.address?.value,
      date: e.target.date?.value,
      phone: e.target.phone?.value,
    };

    fetch("https://pawmart-store-server.vercel.app/myOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Order Successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/myOrders");
        }
      });
  };

  return (
    <div>
      <title>{productName}</title>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="my-10  min-h-screen w-11/12 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div>
              <img
                className=" sm:w-150 sm:h-100 md:w-200 md:h-130  rounded-lg object-cover"
                src={productImage}
                alt=""
              />
            </div>
            <div className="space-y-1 ">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold flex gap-1.5">
                <span>
                  <MdDriveFileRenameOutline />
                </span>
                {productName}
              </h1>
              <h1 className="flex text-xl gap-0.5 md:text-3xl font-semibold">
                {price}
                <span>
                  <TbCurrencyTaka />
                </span>
              </h1>
              <div className="border sm:w-120 md:w-150 lg:w-100 flex flex-col justify-center mt-10 p-3 rounded-lg">
                <p className="flex gap-1 items-center underline text-lg p-2">
                  <span>
                    <BiSolidCategoryAlt />
                  </span>
                  {category}
                </p>
                <p className="flex gap-1 items-center text-lg p-2">
                  <span>
                    <MdDescription />
                  </span>
                  {description}
                </p>
                <p className="flex gap-1 items-center break-all md:text-lg p-2">
                  <span>
                    <SiMinutemailer />
                  </span>
                  {buyerEmail}
                </p>
                <p className="flex gap-1 items-center text-lg p-2">
                  <span>
                    <FaLocationDot />
                  </span>
                  {location}
                </p>
                <p className="flex gap-1 items-center text-lg p-2">
                  {" "}
                  <span>
                    <BsCalendarDateFill />
                  </span>
                  {date}
                </p>

                <button
                  onClick={handleModal}
                  className="relative w-full py-3 cursor-pointer text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700
             shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
             before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:opacity-10 before:rounded-xl before:transition-opacity before:duration-300 hover:before:opacity-20"
                >
                  <span className="flex items-center text-center justify-center">
                    <RiLuggageCartFill /> Order Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Modal */}
          <dialog
            ref={modalRef}
            className="modal modal-bottom sm:modal-middle p-0"
          >
            <div className="modal-box p-6 sm:p-8 rounded-2xl shadow-xl bg-white w-full max-w-md">
              {/* Header */}
              <div className="text-center border-b pb-3 mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Confirmation Details
                </h3>
                <p className="text-gray-500 mt-1 text-sm">
                  Please verify product and your information
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleOrder} className="space-y-4">
                {/* Buyer Name */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Buyer Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={users?.displayName}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={users?.email}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Product ID */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Product ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    readOnly
                    defaultValue={_id}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Product Name */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    readOnly
                    defaultValue={productName}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Quantity */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    required
                    placeholder="0"
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    readOnly
                    defaultValue={price}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    readOnly
                    defaultValue={location}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">Date</label>
                  <input
                    type="text"
                    name="date"
                    readOnly
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Confirm Button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold shadow-md"
                >
                  Confirm Order
                </button>
              </form>

              {/* Close Button */}
              <div className="modal-action mt-4">
                <button
                  onClick={() => modalRef.current.close()}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
