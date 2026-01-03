import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LatestProducts from "../Components/LatestProducts";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const PetsSupplies = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState(0);
  const [sort, setSort] = useState("date")
  const [order, setOrder] = useState("");
  const limit = 8;

  useEffect(() => {
    fetch(
      `https://pawmart-store-server.vercel.app/allproducts?limit=${limit}&skip=${
        currentPages * limit
      }&sort=${sort}&order=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data?.result);
        const page = Math.ceil(data?.total / limit);
        setTotalPages(page);
      });
  }, [currentPages, order, sort]);

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
    fetch(
      `https://pawmart-store-server.vercel.app/allproducts?limit=${limit}&skip=${
        currentPages * limit
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchProducts(data?.result);
      });
  };

  const handleSelect = (e) => {
    const sortText = e.target.value
    setSort(sortText.split("-")[0])
    setOrder(sortText.split("-")[1]);
  };

  return (
    <div>
      <title>PawMart-All-Products</title>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="w-11/12 mx-auto">
          <div className="mt-7 flex flex-col md:flex-row justify-between items-center">
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
            <div className="flex flex-col md:flex-row items-center gap-9">
              <div className="flex items-center mt-5 md:mt-0 gap-1.5">
                <p>Sort_By:</p>
                <select onChange={handleSelect} className="select">
                  <option selected disabled={true}>
                    Customized
                  </option>
                  <option value={"date-desc"}>Latest-Items</option>
                  <option value={"price-asc"}>Low To High "Price"</option>
                  <option value={"price-desc"}>High To Low "Price"</option>
                </select>
              </div>
              <form onSubmit={handleSearch} className="text-end">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
            {searchProducts.map((product) => (
              <LatestProducts key={product._id} product={product} />
            ))}
          </div>

          <div className=" flex justify-self-end gap-1.5 py-2 flex-wrap">
            {currentPages > 0 && (
              <button
                onClick={() => setCurrentPages(currentPages - 1)}
                className="btn flex items-center"
              >
                <GrFormPreviousLink />
                Prev
              </button>
            )}

            {[...Array(totalPages).keys()].map((i) => (
              <button
                onClick={() => setCurrentPages(i)}
                className={`btn ${currentPages === i && "bg-black text-white"}`}
              >
                {i + 1}
              </button>
            ))}

            {currentPages < totalPages - 1 && (
              <button
                onClick={() => setCurrentPages(currentPages + 1)}
                className="btn flex items-center"
              >
                Next
                <GrFormNextLink />
              </button>
            )}
          </div>
        </main>
      </div>
      <footer className="mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default PetsSupplies;
