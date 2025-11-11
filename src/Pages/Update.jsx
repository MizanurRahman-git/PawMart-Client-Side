import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const { productName, productImage, price, description, category, _id } =
    product;

  const handleUpdateData = (e) => {
    e.preventDefault();

    const formData = {
      productName: e.target.name?.value,
      category: e.target.category?.value,
      price: e.target.price?.value,
      description: e.target.description?.value,
      productImage: e.target.photo?.value,
    };

    fetch(`https://pawmart-store-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          Swal.fire({
            title: "Update Successfully",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <title>Update</title>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="font-medium text-center text-3xl">
                  Update Your Product
                </h1>
                <form onSubmit={handleUpdateData}>
                  <fieldset className="fieldset">
                    {/* product name */}
                    <label className="label">Product/Pet Name</label>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      defaultValue={productName}
                      placeholder="Name"
                    />
                    {/* Category */}
                    <label className="label">Category</label>
                    <select
                      defaultValue={category}
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
                      defaultValue={price}
                      name="price"
                      placeholder="price"
                    />
                    {/* Text area */}
                    <label className="label">Description</label>
                    <textarea
                      className="textarea"
                      defaultValue={description}
                      name="description"
                      placeholder="Product Bio"
                    ></textarea>
                    {/* image URL */}
                    <label className="label">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      defaultValue={productImage}
                      className="input"
                      placeholder="URL"
                    />
                    <button className="btn btn-neutral mt-4">Update!</button>
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

export default Update;
