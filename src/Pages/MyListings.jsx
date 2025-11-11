import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import useAuth from "../Hooks/UseAuth";
import TabularCard from "./TabularCard";
import { FaDiceD20 } from "react-icons/fa6";

const MyListings = () => {
  const { users } = useAuth();
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetch(
      `https://pawmart-store-server.vercel.app/my-listing?email=${users?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, [users]);

  return (
    <div>
      <title>My-List</title>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">
          {myList.length ? (
            <div>
              {myList.map((product) => (
                <TabularCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-3xl mt-10">No Data Available</h1>
            </div>
          )}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MyListings;
