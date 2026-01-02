import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/UseAxios";
import LatestProducts from "../Components/LatestProducts";
import AboutPage from "../Components/AboutPage";
import BrandSlider from "../Components/BrandSlider";

const Home = () => {
  const axiosInstance = useAxios();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance.get("/products").then((data) => {
      setProducts(data.data);
    });
  }, [axiosInstance]);

  return (
    <div>
      <title>PawMart-Home</title>
      <h2 className="mt-12 text-2xl font-semibold text-gray-800">
        Latest Products
      </h2>
      <div className="w-20 h-1 mt-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-7 gap-9">
        {products.map((product) => (
          <LatestProducts key={product._id} product={product} />
        ))}
      </div>
      <section className="mt-4">
        <BrandSlider />
      </section>
      <section className="mt-8">
        <AboutPage />
      </section>
    </div>
  );
};

export default Home;
