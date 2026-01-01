import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LatestProducts from "../Components/LatestProducts";

const PetsSupplies = () => {
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    fetch("https://pawmart-store-server.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const searchText = e.target.search?.value;

    fetch(`https://pawmart-store-server.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data);
      });
  };

  const handleCategory = (cate) => {
    fetch(`https://pawmart-store-server.vercel.app/category/${cate}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data);
      });
  };

  const handleAllProducts = () => {
    fetch("https://pawmart-store-server.vercel.app/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data);
      });
  };

  return (
    <div>
      <title>PawMart-All-Products</title>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="w-11/12 mx-auto">
          <div className="mt-7 flex justify-between items-center">
            <div className="space-x-1">
              <select defaultValue="Select Category" className="select w-40">
                <option>
                  <button
                    className="border px-5 py-2 bg-black text-white text-md font-semibold hover:bg-white hover:text-black rounded-md"
                    onClick={handleAllProducts}
                  >
                    All Products
                  </button>
                </option>
                <option>
                  <button
                    className="border px-5 py-2 bg-black text-white text-md font-semibold hover:bg-white hover:text-black rounded-md"
                    onClick={() => handleCategory("Pets")}
                  >
                    Pets
                  </button>
                </option>
                <option>
                  <button
                    className="border px-5 py-2 bg-black text-white text-md font-semibold hover:bg-white hover:text-black rounded-md"
                    onClick={() => handleCategory("Pet Food")}
                  >
                    Pet Food
                  </button>
                </option>
                <option>
                  <button
                    className="border px-5 py-2 bg-black text-white text-md font-semibold hover:bg-white hover:text-black rounded-md"
                    onClick={() => handleCategory("Accessories")}
                  >
                    Accessories
                  </button>
                </option>
                <option>
                  <button
                    className="border px-5 py-2 bg-black text-white text-md font-semibold hover:bg-white hover:text-black rounded-md"
                    onClick={() => handleCategory("Pet Care Products")}
                  >
                    Pet Care Product
                  </button>
                </option>
              </select>
            </div>
            <div>
              <form onSubmit={handleSearch} className="text-end mt-5">
                <div className="join">
                  <div>
                    <label className="input validator join-item">
                      <input
                        type="text"
                        name="search"
                        placeholder="🔍 Search"
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid Product Name
                    </div>
                  </div>
                  <button className="btn btn-neutral join-item">Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 my-10">
            {searchProducts.map((product) => (
              <LatestProducts key={product._id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PetsSupplies;
