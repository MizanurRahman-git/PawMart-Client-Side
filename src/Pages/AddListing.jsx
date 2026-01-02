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

  
  const Textarea = (props) => (
    <textarea
      {...props}
      required
      className="w-full min-h-[140px] rounded-xl border border-slate-300 px-4 py-3 text-sm
               focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    />
  );

  const Select = ({ label, name }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-600">{label}</label>
      <select
        name={name}
        required
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
                 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      >
        <option value="">Select Category</option>
        <option>Pets</option>
        <option>Pet Food</option>
        <option>Accessories</option>
        <option>Pet Care Products</option>
      </select>
    </div>
  );

  const Input = ({ label, ...props }) => (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-slate-600">{label}</label>
      <input
        {...props}
        required
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                 transition"
      />
    </div>
  );

  return (
    <div>
      <title>Add-Products</title>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-3xl border border-slate-200 rounded-3xl my-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
            {/* Header */}
            <div className="px-10 pt-10 pb-6 border-b border-slate-200">
              <h1 className="text-3xl font-semibold tracking-tight">
                Add New Product
              </h1>
              <p className="text-slate-500 text-sm mt-1">
                List your pet or product with accurate details
              </p>
            </div>

            <form onSubmit={handleAddList} className="px-10 py-8 space-y-8">
              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-4">
                  Basic Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Product / Pet Name"
                    name="name"
                    placeholder="British Shorthair"
                  />
                  <Select label="Category" name="category" />
                  <Input label="Price" name="price" placeholder="৳ 8,000" />
                  <Input
                    label="Location"
                    name="location"
                    placeholder="Dhaka, Bangladesh"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-4">
                  Description
                </h3>

                <Textarea
                  name="description"
                  placeholder="Write something meaningful about the product or pet..."
                />
              </section>

              <section>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-4">
                  Media
                </h3>

                <Input
                  label="Photo URL"
                  name="photo"
                  placeholder="https://example.com/image.jpg"
                />
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Date"
                  name="date"
                  value={new Date().toISOString().split("T")[0]}
                />
                <Input label="Email" name="email" value={users?.email} />
              </section>

              <div className="pt-6 flex justify-end">
                <button className="px-8 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
                  Publish Listing
                </button>
              </div>
            </form>
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
