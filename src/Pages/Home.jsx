import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/UseAxios";
import LatestProducts from "../Components/LatestProducts";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-9">
        {products.map((product) => (
          <LatestProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
