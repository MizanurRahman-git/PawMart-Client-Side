import { Link, useLoaderData, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdDescription } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { useRef } from "react";
import useAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { users } = useAuth();
  const product = useLoaderData();
  const modalRef = useRef(null);
  const navigate = useNavigate();

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
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="my-10  min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div>
              <img
                className="w-64 h-50 md:w-200 md:h-130  rounded-lg object-cover"
                src={productImage}
                alt=""
              />
            </div>
            <div className="space-y-1 ">
              <h1 className="text-2xl md:text-5xl font-semibold flex gap-1.5">
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
              <div className="border w-60 md:w-150 lg:w-100 flex flex-col justify-center mt-10 p-3 rounded-lg">
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
                  className="bg-blue-500 py-2 w-full rounded-lg"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
          {/* Modal */}
          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Conformation Details
              </h3>
              <p className="py-4 text-center">
                Please Check Product and Your Informations
              </p>
              <form onSubmit={handleOrder}>
                <fieldset className="fieldset mx-auto">
                  {/* buyer name */}
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    readOnly
                    defaultValue={users.displayName}
                    placeholder="Name"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    readOnly
                    defaultValue={users.email}
                    placeholder="Name"
                  />
                  {/* id */}
                  <label className="label">Product Id</label>
                  <input
                    type="text"
                    className="input"
                    name="id"
                    readOnly
                    defaultValue={_id}
                    placeholder="Name"
                  />
                  {/* product name */}
                  <label className="label">Product Name</label>
                  <input
                    type="text"
                    className="input"
                    name="productName"
                    readOnly
                    defaultValue={productName}
                    placeholder="Name"
                  />
                  {/* Quantity */}
                  <label className="label">Quantity</label>
                  <input
                    type="number"
                    className="input"
                    name="quantity"
                    placeholder="0"
                  />

                  {/* price */}
                  <label className="label">Price</label>
                  <input
                    type="text"
                    className="input"
                    readOnly
                    defaultValue={price}
                    name="price"
                    placeholder="price"
                  />
                  {/* Address*/}
                  <label className="label">Address</label>
                  <input
                    type="text"
                    className="input"
                    name="address"
                    readOnly
                    defaultValue={location}
                    placeholder="Name"
                  />
                  {/* date */}
                  <label className="label">Date</label>
                  <input
                    type="text"
                    name="date"
                    readOnly
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="input"
                    placeholder="URL"
                  />
                  {/* Phone */}
                  <label className="label">Phone Number</label>
                  <input
                    type="text"
                    className="input"
                    name="phone"
                    placeholder="Number"
                  />
                  <button className="btn btn-neutral mt-4">Confirm</button>
                </fieldset>
              </form>
              <div className="modal-action w-full">
                <form className="w-full" method="dialog">
                  <button className="btn w-full bg-red-400">Close</button>
                </form>
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
