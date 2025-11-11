import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddListing = () => {
  const navigate = useNavigate();
  const { users } = useAuth();

  const handleAddList = (e) => {
    e.preventDefault();

    const formData = {
      productName: e.target.name?.value,
      category: e.target.category?.value,
      price: e.target.price?.value,
      location: e.target.location?.value,
      description: e.target.description?.value,
      productImage: e.target.photo?.value,
      buyerEmail: e.target.email?.value,
      date: e.target.date?.value,
    };

    fetch("https://pawmart-store-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/");
          Swal.fire({
            title: "Product Add Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <title>Add-Products</title>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="my-3">
          <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="font-medium text-center text-3xl">
                  Add New Product
                </h1>
                <form onSubmit={handleAddList}>
                  <fieldset className="fieldset">
                    {/* product name */}
                    <label className="label">Product/Pet Name</label>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      placeholder="Name"
                    />
                    {/* Category */}
                    <label className="label">Category</label>
                    <select
                      defaultValue="Pick a Product"
                      name="category"
                      className="select"
                    >
                      <option disabled={true}>Pick a Product</option>
                      <option>Pets</option>
                      <option>Food</option>
                      <option>Accessories</option>
                      <option>Care Products</option>
                    </select>
                    {/* price */}
                    <label className="label">Price</label>
                    <input
                      type="text"
                      className="input"
                      name="price"
                      placeholder="price"
                    />
                    {/* location */}
                    <label className="label">Location</label>
                    <input
                      type="text"
                      className="input"
                      name="location"
                      placeholder="Location"
                    />
                    {/* Text area */}
                    <label className="label">Description</label>
                    <textarea
                      className="textarea"
                      name="description"
                      placeholder="Product Bio"
                    ></textarea>
                    {/* image URL */}
                    <label className="label">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      className="input"
                      placeholder="URL"
                    />
                    {/* date */}
                    <label className="label">Date</label>
                    <input
                      type="text"
                      readOnly
                      defaultValue={new Date().toISOString().split("T")[0]}
                      name="date"
                      className="input"
                      placeholder="Date"
                    />
                    {/* Email */}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      readOnly
                      defaultValue={users?.email}
                      className="input"
                      placeholder="email"
                    />
                    <button className="btn btn-neutral mt-4">
                      Add Product
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AddListing;
